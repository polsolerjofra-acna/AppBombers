import React from 'react';
import ReactDOM from 'react-dom/client';
import DiagramContainer from '../components/content/DiagramContainer';

function collectAllDiagrams(topics) {
  const ordered = [...(topics || [])].sort((a, b) => a.number - b.number);
  const items = [];
  const seenTypes = new Set();

  ordered.forEach((topic) => {
    (topic.pages || []).forEach((page) => {
      (page.blocks || []).forEach((block) => {
        if (block.type === 'diagram' && block.diagramType) {
          // Evitem duplicats exactes si un diagramType es repeteix en 2 temes
          if (seenTypes.has(block.diagramType)) return;
          seenTypes.add(block.diagramType);
          items.push({
            topicNumber: topic.number,
            topicCode: topic.code || `Tema ${topic.number}`,
            title: block.title || topic.title,
            caption: block.caption || '',
            diagramType: block.diagramType,
            customSvg: block.customSvg || null,
          });
        }
      });
    });
  });

  return items;
}

function inlineSvgComputedColors(sourceSvg, targetSvg) {
  const srcEls = sourceSvg.querySelectorAll('*');
  const dstEls = targetSvg.querySelectorAll('*');
  for (let i = 0; i < srcEls.length && i < dstEls.length; i++) {
    const cs = window.getComputedStyle(srcEls[i]);
    const dst = dstEls[i];
    if (cs.fill && cs.fill !== 'none' && !dst.getAttribute('fill')) {
      dst.setAttribute('fill', cs.fill);
    }
    if (cs.stroke && cs.stroke !== 'none' && !dst.getAttribute('stroke')) {
      dst.setAttribute('stroke', cs.stroke);
    }
    if (srcEls[i].tagName.toLowerCase() === 'text') {
      dst.setAttribute('font-family', 'Arial, Helvetica, sans-serif');
      if (cs.fontSize) dst.setAttribute('font-size', cs.fontSize);
      if (cs.fontWeight) dst.setAttribute('font-weight', cs.fontWeight);
    }
  }
}

function renderSvgToPngDataUrl(svgEl, targetWidth = 2200) {
  return new Promise((resolve, reject) => {
    try {
      const vb = (svgEl.getAttribute('viewBox') || '0 0 680 240')
        .trim()
        .split(/[\s,]+/)
        .map(Number);
      const vbW = vb[2] || 680;
      const vbH = vb[3] || 240;
      const targetHeight = Math.round((targetWidth * vbH) / vbW);

      const clone = svgEl.cloneNode(true);
      clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      clone.setAttribute('width', String(targetWidth));
      clone.setAttribute('height', String(targetHeight));
      inlineSvgComputedColors(svgEl, clone);

      const xml = new XMLSerializer().serializeToString(clone);
      const svgBlob = new Blob([xml], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, targetWidth, targetHeight);
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
        URL.revokeObjectURL(url);
        resolve({
          dataUrl: canvas.toDataURL('image/png'),
          aspect: vbW / vbH,
        });
      };
      img.onerror = (err) => {
        URL.revokeObjectURL(url);
        reject(err);
      };
      img.src = url;
    } catch (err) {
      reject(err);
    }
  });
}

export async function downloadAllPostersPdf(topics, onProgress = null) {
  const jsPDF = window.jspdf && window.jspdf.jsPDF;
  if (!jsPDF) {
    window.print();
    return;
  }

  const diagrams = collectAllDiagrams(topics);
  if (diagrams.length === 0) return;

  // Contenidor ocult fora de pantalla en mode clar per renderitzar cada SVG
  const host = document.createElement('div');
  host.style.position = 'fixed';
  host.style.left = '-99999px';
  host.style.top = '0';
  host.style.width = '900px';
  host.style.background = '#ffffff';
  host.className = 'light';
  document.body.appendChild(host);

  const root = ReactDOM.createRoot(host);
  let doc = null;

  try {
    for (let i = 0; i < diagrams.length; i++) {
      const item = diagrams[i];
      if (onProgress) onProgress(`Generant làmina ${i + 1} de ${diagrams.length}...`);

      root.render(
        React.createElement(DiagramContainer, {
          title: item.title,
          caption: item.caption,
          diagramType: item.diagramType,
          customSvg: item.customSvg,
        })
      );

      await new Promise((r) => setTimeout(r, 35));
      const svgEl = host.querySelector('svg');
      if (!svgEl) continue;

      const { dataUrl, aspect } = await renderSvgToPngDataUrl(svgEl, 2200);
      const orientation = aspect >= 1.15 ? 'landscape' : 'portrait';

      if (!doc) {
        doc = new jsPDF({ unit: 'mm', format: 'a4', orientation });
      } else {
        doc.addPage('a4', orientation);
      }

      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const margin = 10;

      // Capçalera del pòster
      doc.setFillColor(15, 23, 42);
      doc.rect(margin, margin, pageW - margin * 2, 12, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor(255, 255, 255);
      const headerTxt = `TEMA ${item.topicNumber} (${item.topicCode}) — ${item.title}`.slice(0, 95);
      doc.text(headerTxt, margin + 4, margin + 8);

      // Àrea màxima per al diagrama gran (per penjar al suro)
      const availW = pageW - margin * 2;
      const availH = pageH - margin * 2 - 24;
      let drawW = availW;
      let drawH = drawW / aspect;
      if (drawH > availH) {
        drawH = availH;
        drawW = drawH * aspect;
      }
      const x = margin + (availW - drawW) / 2;
      const y = margin + 15 + (availH - drawH) / 2;

      doc.setDrawColor(203, 213, 225);
      doc.setLineWidth(0.3);
      doc.rect(x - 1, y - 1, drawW + 2, drawH + 2);
      doc.addImage(dataUrl, 'PNG', x, y, drawW, drawH);

      // Peu amb descripció breu
      if (item.caption) {
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8.5);
        doc.setTextColor(51, 65, 85);
        const capLines = doc.splitTextToSize(item.caption, pageW - margin * 2).slice(0, 2);
        doc.text(capLines, margin, pageH - margin - 2);
      }
    }

    if (doc) {
      doc.save('Lamines_Visuals_Suro_Bombers_SGO_2026.pdf');
    }
  } finally {
    root.unmount();
    if (host.parentNode) host.parentNode.removeChild(host);
    if (onProgress) onProgress('');
  }
}
