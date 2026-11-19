# Plataforma d'Estudi · Oposicions Bombers de la Generalitat (Temari SGO 2026)

Aplicació web en català per estudiar tots els **34 temes oficials** (Temes 1–7 de Legislació i Temes 8–34 del bloc tècnic/operatiu), amb:
- Resums visuals, explicacions en *Mode Nen Petit*, diagrames SVG, taules numèriques i regles mnemotècniques.
- **370 preguntes d'autoavaluació** (10–12 per tema) amb feedback immediat.
- **Centre de Càlculs, Fórmules i Problemes** (Física, Química/Gasos, Electricitat, Hidràulica i Conducció) amb trucs de càlcul mental.
- **Temporitzador Pomodoro** i **Regla de l'Oblit (Corba d'Ebbinghaus)** desats a `localStorage`.

---

## Col·laborar al projecte (per a l'equip)

1. **Clonar el repositori**:
   ```bash
   git clone https://github.com/<EL_TEU_USUARI>/estudi-bombers.git
   cd estudi-bombers
   ```
2. **Instal·lar dependències i arrencar en local**:
   ```bash
   npm install
   npm run dev
   ```
   *(També es pot obrir directament `preview.html` sense tenir Node instal·lat).*
3. **On editar contingut**:
   - Temes i preguntes de test: `src/data/topics/`
   - Fórmules i problemes de càlcul: `src/data/calculationsData.js`
   - Diagrames SVG: `src/components/content/DiagramContainer.jsx`
4. **Pujar canvis**:
   ```bash
   git add .
   git commit -m "Millora del tema X / noves preguntes"
   git push
   ```
   Cada `push` a `main` desplega automàticament la web a **GitHub Pages**.
