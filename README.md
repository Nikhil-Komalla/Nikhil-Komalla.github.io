# Nikhil Komalla — Academic & Computational Materials Portfolio

Live site: https://nikhil-komalla.github.io

Research group: [Materials & Minerals Theory (MMT) Group](https://sites.google.com/view/nelsondzade/home) — The Pennsylvania State University

## Structure

- `index.html` — Single-page portfolio featuring Hero (**Edge-Interactive Crystal/Defect & Doping Lattice** + **Graduating May 2027**), About, Education, Experience, Technical Toolkit (**VASP, Quantum ESPRESSO, PySCF, AIMD, Classical MD via LAMMPS, Thermodynamics/Kinetics/TST, categorized FairChem/MACE/AQCat/UPET/MatterSim MLIPs + Matbench Discovery & CatBench benchmarks, HPC**), Highlighted Publications, Interactive Hackathons Workbench (**AtomInfer**, **Usefulness Boundary Hub `osi-mlips`**, **MIT Energy & Climate Hack COMSOL Problem Statement**), Resume Studio (**Uploaded PDF + 1-Page Jake's Resume LaTeX Customizer across 5 Tracks**), Scrollable News / LinkedIn Activity Tab, and Contact.
- `style.css` — Responsive Penn State Beaver Blue styling, edge-safe hero canvas layout, split-view hackathon stage with interactive SVG flowcharts, compact 1-page Jake's Resume sheet, and scrollable carousel/vertical News controls.
- `script.js` — Edge-only crystal disorder & substitutional doping canvas, interactive hover/click hackathon SVG flowcharts, scroll spy, publication filters, news loader, and 1-page Jake's Resume LaTeX generator with `.tex` download, clipboard copy, Overleaf launch, and PDF print export.
- `resume/Nikhil Komalla Resume.pdf` — Uploaded PDF resume rendered directly inside the Resume section.
- `assets/publications.json`, `assets/news.json`, `assets/resume_data.json` — Structured data powering the Publications, News, and Live LaTeX Resume Studio sections.

## Updating Live LinkedIn Embeds or Publications

1. **Embed a live LinkedIn post in `#news`**:
   - Open your post on LinkedIn, click **`⋯` → `Embed this post`**, and copy the iframe `src` URL (`https://www.linkedin.com/embed/feed/update/urn:li:...`).
   - Paste it into `"embedUrl"` on the corresponding item (or add a new item) in `assets/news.json`.
2. **Add publications or customize resume tracks**: Edit `assets/publications.json` or `assets/resume_data.json`.
