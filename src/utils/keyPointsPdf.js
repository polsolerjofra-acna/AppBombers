/**
 * Construeix l'estructura de document "Punts Clau" (estil fitxa A4 oficial,
 * idèntic als PDFs de referència: Arial/Helvetica negre pur, marges 25.4 mm,
 * caixa de títol amb vora negra, apartats numerats, vinyetes ●/○ amb prefix
 * en negreta seguit de text normal, taules blanques amb vora negra i quadres).
 */

/**
 * Converteix caràcters Unicode fora de WinAnsi (subíndexs, fletxes, símbols
 * matemàtics) a equivalents WinAnsi/ASCII nets perquè jsPDF no deformi
 * l'espaiat ni tregui caràcters estranys.
 */
function toPdfText(input) {
  const map = {
    '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
    '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
    '⁰': '0', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    '⁺': '+', '⁻': '-', 'ᵃ': 'a',
    '→': '->', '←': '<-', '↔': '<->', '↑': '(puja)', '↓': '(baixa)',
    '≥': '>=', '≤': '<=', '≠': '!=', '≈': '~', '∝': 'proporcional a',
    'Δ': 'Delta ', 'Ω': 'ohm', 'α': 'alfa', 'β': 'beta', 'γ': 'gamma', 'μ': 'u',
    '–': '-', '—': '-', '’': "'", '‘': "'", '“': '"', '”': '"', '…': '...',
    '•': '-', '◦': '-', '▪': '-', '■': '-', '●': '-', '○': '-',
    '\u00a0': ' '
  };
  return String(input || '')
    .replace(/[\u00a0₀-₉⁰⁴-⁹⁺⁻ᵃ→←↔↑↓≥≤≠≈∝ΔΩαβγμ–—’‘“”…•◦▪■●○]/g, (ch) => map[ch] ?? '')
    .replace(/[^\x09\x0A\x0D\x20-\xFF]/g, '');
}

export function splitBoldPrefix(text) {
  const str = String(text || '').trim();
  const idx = str.indexOf(':');
  if (idx > 0 && idx <= 68 && !str.slice(0, idx).includes('http')) {
    return {
      bold: str.slice(0, idx + 1),
      rest: str.slice(idx + 1).trimStart()
    };
  }
  return { bold: '', rest: str };
}

export function buildTopicKeyPointsDoc(topic, schemas = [], confusionItems = []) {
  const sections = [];
  let secNum = 1;

  (schemas || []).forEach((schema) => {
    (schema.branches || []).forEach((branch) => {
      const subblocks = (branch.items || []).map((it) => ({
        label: it.label,
        bullets: it.children || []
      }));
      sections.push({
        number: secNum++,
        title: branch.title,
        subblocks
      });
    });
  });

  const tables = [];
  (topic.pages || []).forEach((p) => {
    (p.blocks || []).forEach((b) => {
      if (b.type === 'numericTable' && b.headers && b.rows) {
        tables.push({
          title: b.title || `Taula · Pàg. ${p.pageNumber || ''}`,
          headers: b.headers,
          rows: b.rows.slice(0, 8)
        });
      }
    });
  });

  const callouts = [];
  if (topic.importance?.traps && topic.importance.traps.length > 0) {
    callouts.push({
      title: 'Punts Crítics i Trampes d’Examen',
      lines: topic.importance.traps
    });
  }
  if (confusionItems && confusionItems.length > 0) {
    callouts.push({
      title: 'Conceptes Fàcils de Confondre',
      lines: confusionItems.map(
        (c) => `${c.concept}: ${c.value} — ${c.confusionWarning}`
      )
    });
  }

  return {
    headerBox: `Punts Clau ${topic.code || `Tema ${topic.number}`} - ${topic.title}`,
    sections,
    tables: tables.slice(0, 3),
    callouts
  };
}

/**
 * Dibuixa una línia de text amb un prefix en negreta seguit de text normal
 * mantenint el salt de línia natural i sense cap solapament.
 */
function drawMixedParagraph(doc, rawBold, rawRest, startX, startY, maxW, fontSize, lineH, ensureSpace) {
  let y = startY;
  const boldPrefix = toPdfText(rawBold);
  const regularText = toPdfText(rawRest);

  doc.setFontSize(fontSize);
  doc.setTextColor(0, 0, 0);

  if (!boldPrefix) {
    doc.setFont('helvetica', 'normal');
    const lines = doc.splitTextToSize(regularText, maxW);
    lines.forEach((ln) => {
      y = ensureSpace(lineH, y);
      doc.text(ln, startX, y);
      y += lineH;
    });
    return y;
  }

  if (!regularText) {
    doc.setFont('helvetica', 'bold');
    const lines = doc.splitTextToSize(boldPrefix, maxW);
    lines.forEach((ln) => {
      y = ensureSpace(lineH, y);
      doc.text(ln, startX, y);
      y += lineH;
    });
    return y;
  }

  doc.setFont('helvetica', 'bold');
  const boldW = doc.getTextWidth(`${boldPrefix} `);

  if (boldW < maxW * 0.65) {
    y = ensureSpace(lineH, y);
    doc.setFont('helvetica', 'bold');
    doc.text(boldPrefix, startX, y);

    doc.setFont('helvetica', 'normal');
    const firstLineAvail = maxW - boldW - 0.5;
    const words = regularText.split(/\s+/);
    let firstLine = '';
    let idx = 0;
    while (idx < words.length) {
      const candidate = firstLine ? `${firstLine} ${words[idx]}` : words[idx];
      if (doc.getTextWidth(candidate) <= firstLineAvail) {
        firstLine = candidate;
        idx++;
      } else {
        break;
      }
    }
    if (firstLine) {
      doc.text(firstLine, startX + boldW + 0.5, y);
    }
    y += lineH;

    const remaining = words.slice(idx).join(' ');
    if (remaining) {
      const restLines = doc.splitTextToSize(remaining, maxW);
      restLines.forEach((ln) => {
        y = ensureSpace(lineH, y);
        doc.text(ln, startX, y);
        y += lineH;
      });
    }
    return y;
  }

  doc.setFont('helvetica', 'bold');
  const bLines = doc.splitTextToSize(boldPrefix, maxW);
  bLines.forEach((ln) => {
    y = ensureSpace(lineH, y);
    doc.text(ln, startX, y);
    y += lineH;
  });
  doc.setFont('helvetica', 'normal');
  const rLines = doc.splitTextToSize(regularText, maxW);
  rLines.forEach((ln) => {
    y = ensureSpace(lineH, y);
    doc.text(ln, startX, y);
    y += lineH;
  });
  return y;
}

function renderTopicKeyPointsIntoDoc(doc, docData) {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginX = 25.4;
  const marginTop = 25.4;
  const marginBottom = 22;
  const maxW = pageWidth - marginX * 2;
  let y = marginTop;

  const ensureSpace = (needed, currentY) => {
    if (currentY + needed > pageHeight - marginBottom) {
      doc.addPage();
      return marginTop;
    }
    return currentY;
  };

  // Caixa de títol superior
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13.5);
  doc.setTextColor(0, 0, 0);
  const titleLines = doc.splitTextToSize(toPdfText(docData.headerBox), maxW - 8);
  const boxH = titleLines.length * 6.2 + 7;
  doc.setDrawColor(0, 0, 0);
  doc.setLineWidth(0.35);
  doc.rect(marginX, y, maxW, boxH);
  doc.text(titleLines, marginX + 4, y + 7.5);
  y += boxH + 9;

  // Seccions numerades
  docData.sections.forEach((sec) => {
    y = ensureSpace(13, y);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11.5);
    doc.setTextColor(0, 0, 0);
    const secTitleLines = doc.splitTextToSize(toPdfText(`${sec.number}. ${sec.title}`), maxW);
    secTitleLines.forEach((ln) => {
      y = ensureSpace(5.5, y);
      doc.text(ln, marginX, y);
      y += 5.5;
    });
    y += 1.5;

    (sec.subblocks || []).forEach((sub) => {
      y = ensureSpace(7, y);
      doc.setFillColor(0, 0, 0);
      doc.circle(marginX + 7.5, y - 1.2, 0.85, 'F');

      const { bold, rest } = splitBoldPrefix(sub.label);
      const effectiveBold = bold || (sub.bullets && sub.bullets.length > 0 ? sub.label : '');
      const effectiveRest = bold ? rest : (sub.bullets && sub.bullets.length > 0 ? '' : sub.label);

      y = drawMixedParagraph(
        doc,
        effectiveBold,
        effectiveRest,
        marginX + 11.5,
        y,
        maxW - 11.5,
        10.5,
        4.7,
        ensureSpace
      );
      y += 0.8;

      (sub.bullets || []).forEach((b) => {
        y = ensureSpace(6, y);
        doc.setDrawColor(0, 0, 0);
        doc.setLineWidth(0.28);
        doc.circle(marginX + 15.5, y - 1.2, 0.8, 'S');

        const childParts = splitBoldPrefix(b);
        y = drawMixedParagraph(
          doc,
          childParts.bold,
          childParts.rest,
          marginX + 19.5,
          y,
          maxW - 19.5,
          10,
          4.5,
          ensureSpace
        );
        y += 0.4;
      });
      y += 0.8;
    });
    y += 3.5;
  });

  // Taules comparatives
  (docData.tables || []).forEach((tbl) => {
    y = ensureSpace(22, y);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(0, 0, 0);
    const tLines = doc.splitTextToSize(toPdfText(tbl.title), maxW);
    tLines.forEach((ln) => {
      y = ensureSpace(5, y);
      doc.text(ln, marginX, y);
      y += 5;
    });
    y += 1.5;

    const cols = tbl.headers.length;
    const colW = maxW / cols;

    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.3);
    doc.rect(marginX, y, maxW, 8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    tbl.headers.forEach((h, i) => {
      if (i > 0) doc.line(marginX + i * colW, y, marginX + i * colW, y + 8);
      const cellTxt = doc.splitTextToSize(toPdfText(h), colW - 4)[0] || '';
      doc.text(cellTxt, marginX + i * colW + 2, y + 5.3);
    });
    y += 8;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9.5);
    tbl.rows.forEach((row) => {
      const wrappedCols = row.map((cell) => doc.splitTextToSize(toPdfText(cell), colW - 4));
      const maxLines = Math.max(...wrappedCols.map((w) => w.length), 1);
      const rowH = maxLines * 4.3 + 4;
      y = ensureSpace(rowH + 2, y);
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.3);
      doc.rect(marginX, y, maxW, rowH);
      wrappedCols.forEach((lines, i) => {
        if (i > 0) doc.line(marginX + i * colW, y, marginX + i * colW, y + rowH);
        doc.setFont('helvetica', i === 0 ? 'bold' : 'normal');
        doc.text(lines, marginX + i * colW + 2, y + 5);
      });
      y += rowH;
    });
    y += 6;
  });

  // Quadres destacats
  (docData.callouts || []).forEach((box) => {
    const wrappedItems = box.lines.map((ln) => {
      const parts = splitBoldPrefix(ln);
      return {
        bold: parts.bold,
        rest: parts.rest,
        linesCount: doc.splitTextToSize(toPdfText(ln), maxW - 16).length
      };
    });
    const estH = 12 + wrappedItems.reduce((acc, it) => acc + it.linesCount * 4.6 + 1.5, 0);
    y = ensureSpace(Math.min(estH, 45), y);

    const boxStartY = y;
    y += 6.5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);
    doc.text(toPdfText(box.title), marginX + 4, y);
    y += 6;

    wrappedItems.forEach((it) => {
      y = ensureSpace(6, y);
      doc.setFillColor(0, 0, 0);
      doc.circle(marginX + 8.5, y - 1.2, 0.75, 'F');
      y = drawMixedParagraph(
        doc,
        it.bold,
        it.rest,
        marginX + 12,
        y,
        maxW - 16,
        10,
        4.6,
        (needed, curY) => {
          if (curY + needed > pageHeight - marginBottom) {
            doc.setDrawColor(0, 0, 0);
            doc.setLineWidth(0.35);
            doc.rect(marginX, boxStartY, maxW, curY - boxStartY + 2);
            doc.addPage();
            return marginTop;
          }
          return curY;
        }
      );
      y += 1;
    });

    doc.setDrawColor(0, 0, 0);
    doc.setLineWidth(0.35);
    doc.rect(marginX, boxStartY, maxW, y - boxStartY + 3);
    y += 8;
  });
}

export function downloadKeyPointsPdf(docData, topic) {
  const jsPDF = window.jspdf && window.jspdf.jsPDF;
  if (!jsPDF) {
    window.print();
    return;
  }

  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
  renderTopicKeyPointsIntoDoc(doc, docData);
  const safeCode = (topic.code || `Tema_${topic.number}`).replace(/[^a-zA-Z0-9._-]/g, '_');
  doc.save(`Punts_Clau_T${topic.number}_${safeCode}.pdf`);
}

export function downloadAllKeyPointsPdf(allTopicDocs) {
  const jsPDF = window.jspdf && window.jspdf.jsPDF;
  if (!jsPDF) {
    window.print();
    return;
  }

  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
  const ordered = [...(allTopicDocs || [])].sort(
    (a, b) => (a.topic?.number || 0) - (b.topic?.number || 0)
  );
  ordered.forEach((entry, idx) => {
    if (idx > 0) doc.addPage();
    renderTopicKeyPointsIntoDoc(doc, entry.docData);
  });
  doc.save('Punts_Clau_Tots_els_Temes_SGO_2026.pdf');
}
