/**
 * Construeix l'estructura de document "Punts Clau" (estil fitxa A4 oficial)
 * per a qualsevol dels 34 temes i genera un PDF descarregable amb jsPDF.
 */

export function buildTopicKeyPointsDoc(topic, schemas = [], confusionItems = []) {
  const sections = [];
  let secNum = 1;

  // 1..N: Seccions estructurades a partir dels esquemes complets del tema
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

  // Taules clau del tema (si n'hi ha)
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

  // Quadres destacats (Trampes d'examen + No confondre!)
  const callouts = [];
  if (topic.importance?.traps && topic.importance.traps.length > 0) {
    callouts.push({
      title: 'Punts Crítics i Trampes d’Examen',
      lines: topic.importance.traps
    });
  }
  if (confusionItems && confusionItems.length > 0) {
    callouts.push({
      title: 'Conceptes Fàcils de Confondre (Alerta!)',
      lines: confusionItems.map(
        (c) => `${c.concept}: ${c.value} — ${c.confusionWarning}`
      )
    });
  }

  return {
    headerBox: `Punts Clau ${topic.code || `Tema ${topic.number}`} - ${topic.title}`,
    subtitle: `Tema ${topic.number} · ${topic.category || 'Temari Oficial SGO 2026'}`,
    sections,
    tables: tables.slice(0, 3),
    callouts
  };
}

export function downloadKeyPointsPdf(docData, topic) {
  const jsPDF = window.jspdf && window.jspdf.jsPDF;
  if (!jsPDF) {
    window.print();
    return;
  }

  const doc = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const marginX = 18;
  const maxW = pageWidth - marginX * 2;
  let y = 18;

  const ensureSpace = (needed = 10) => {
    if (y + needed > pageHeight - 16) {
      doc.addPage();
      y = 18;
    }
  };

  // Caixa de títol superior (estil fitxa oficial)
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  const titleLines = doc.splitTextToSize(docData.headerBox, maxW - 8);
  const boxH = titleLines.length * 6 + 6;
  doc.setDrawColor(30, 41, 59);
  doc.setLineWidth(0.5);
  doc.rect(marginX, y, maxW, boxH);
  doc.setTextColor(15, 23, 42);
  doc.text(titleLines, marginX + 4, y + 7);
  y += boxH + 4;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.text(docData.subtitle, marginX, y);
  y += 7;

  // Seccions numerades (1., 2., 3...)
  docData.sections.forEach((sec) => {
    ensureSpace(14);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    const secTitleLines = doc.splitTextToSize(`${sec.number}. ${sec.title}`, maxW);
    doc.text(secTitleLines, marginX, y);
    y += secTitleLines.length * 5.2 + 1.5;

    (sec.subblocks || []).forEach((sub) => {
      ensureSpace(9);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(30, 41, 59);
      const labelLines = doc.splitTextToSize(`•  ${sub.label}`, maxW - 5);
      doc.text(labelLines, marginX + 3, y);
      y += labelLines.length * 4.5 + 1;

      (sub.bullets || []).forEach((b) => {
        ensureSpace(6);
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(9);
        doc.setTextColor(51, 65, 85);
        const bLines = doc.splitTextToSize(`◦  ${b}`, maxW - 11);
        doc.text(bLines, marginX + 9, y);
        y += bLines.length * 4.2 + 0.8;
      });
      y += 1.2;
    });
    y += 2.5;
  });

  // Taules comparatives
  (docData.tables || []).forEach((tbl) => {
    ensureSpace(22);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    const tLines = doc.splitTextToSize(tbl.title, maxW);
    doc.text(tLines, marginX, y);
    y += tLines.length * 4.5 + 2;

    const cols = tbl.headers.length;
    const colW = maxW / cols;

    // Capçalera
    doc.setFillColor(241, 245, 249);
    doc.rect(marginX, y, maxW, 7, 'F');
    doc.setDrawColor(148, 163, 184);
    doc.rect(marginX, y, maxW, 7);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.2);
    tbl.headers.forEach((h, i) => {
      const cellTxt = doc.splitTextToSize(String(h), colW - 3)[0] || '';
      doc.text(cellTxt, marginX + i * colW + 1.5, y + 4.8);
    });
    y += 7;

    // Files
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    tbl.rows.forEach((row) => {
      const wrappedCols = row.map((cell) => doc.splitTextToSize(String(cell || ''), colW - 3));
      const maxLines = Math.max(...wrappedCols.map((w) => w.length), 1);
      const rowH = maxLines * 3.8 + 3;
      ensureSpace(rowH + 2);
      doc.setDrawColor(203, 213, 225);
      doc.rect(marginX, y, maxW, rowH);
      wrappedCols.forEach((lines, i) => {
        if (i > 0) doc.line(marginX + i * colW, y, marginX + i * colW, y + rowH);
        doc.text(lines, marginX + i * colW + 1.5, y + 4);
      });
      y += rowH;
    });
    y += 5;
  });

  // Quadres destacats (estil caixa amb vora)
  (docData.callouts || []).forEach((box) => {
    ensureSpace(18);
    const wrappedLines = [];
    box.lines.forEach((ln) => {
      doc.splitTextToSize(`• ${ln}`, maxW - 8).forEach((wl) => wrappedLines.push(wl));
    });
    const boxHeight = 8 + wrappedLines.length * 4.3 + 3;
    ensureSpace(boxHeight + 2);
    doc.setDrawColor(71, 85, 105);
    doc.setLineWidth(0.35);
    doc.rect(marginX, y, maxW, boxHeight);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(box.title, marginX + 4, y + 5.5);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    doc.text(wrappedLines, marginX + 4, y + 10.5);
    y += boxHeight + 5;
  });

  // Peu de pàgina
  const totalPages = doc.internal.getNumberOfPages();
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(
      `Punts Clau · Tema ${topic.number} (${topic.code || 'SGO 2026'})`,
      marginX,
      pageHeight - 8
    );
    doc.text(`Pàgina ${p} de ${totalPages}`, pageWidth - marginX - 18, pageHeight - 8);
  }

  const safeCode = (topic.code || `Tema_${topic.number}`).replace(/[^a-zA-Z0-9._-]/g, '_');
  doc.save(`Punts_Clau_T${topic.number}_${safeCode}.pdf`);
}
