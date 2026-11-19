# Nikhil Komalla — Academic & Computational Materials Portfolio

Live site: https://nikhil-komalla.github.io

Research group: [Materials & Minerals Theory (MMT) Group](https://sites.google.com/view/nelsondzade/home) — The Pennsylvania State University

## Structure

- `index.html` — Single-page portfolio featuring Hero (**Open to Work • Available Summer 2027**), About, Education, Experience, Technical Toolkit (**DFT, AIMD, Classical MD with MLIPs, AI for Science, HPC**), Highlighted Publications, Hackathons (**AtomInfer**, **Usefulness Boundary Hub `osi-mlips`**, **PCM Cold Transportation**), Interactive Resume Studio (**Uploaded PDF + 5-Track Live LaTeX Customizer**), Scrollable News / LinkedIn Activity Tab, and Contact.
- `style.css` — Responsive Penn State Beaver Blue styling, hackathon grid, LaTeX preview sheet, and scrollable carousel/vertical News controls.
- `script.js` — Scroll spy, interactive publication filters, hackathon/news loaders, and live LaTeX resume generator with `.tex` download, clipboard copy, Overleaf launch, and PDF print export.
- `resume/Nikhil Komalla Resume.pdf` — Uploaded PDF resume rendered directly inside the Resume section.
- `assets/publications.json`, `assets/news.json`, `assets/resume_data.json` — Structured data powering the Publications, News, and Live LaTeX Resume Studio sections.

## Updating Live LinkedIn Embeds or Publications

1. **Embed a live LinkedIn post in `#news`**:
   - Open your post on LinkedIn, click **`⋯` → `Embed this post`**, and copy the iframe `src` URL (`https://www.linkedin.com/embed/feed/update/urn:li:...`).
   - Paste it into `"embedUrl"` on the corresponding item (or add a new item) in `assets/news.json`.
2. **Add publications or customize resume tracks**: Edit `assets/publications.json` or `assets/resume_data.json`.
