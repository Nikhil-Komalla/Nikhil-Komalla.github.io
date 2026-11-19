# Nikhil Komalla — Academic & Computational Materials Portfolio

Live site: https://nikhil-komalla.github.io

## Structure

- `index.html` — Responsive single-page portfolio with Hero (`Open to Work • Summer 2027`), About, Education, Experience, Technical Toolkit & MLIP Workflows, Highlighted Publications, Scrollable News / LinkedIn Feed (`#news`), and Contact.
- `style.css` — Custom styling using Penn State Beaver Blue (`#1e407c`), smooth scroll-snap feed controls, and responsive breakpoints.
- `script.js` — Scroll spy, interactive publication filters, and dynamic JSON loaders with local fallback support.
- `assets/publications.json` — Peer-reviewed publication metadata (`Small`, `Advanced Energy Materials`, `JCIS`, `PCCP`).
- `assets/news.json` — Scrollable News & LinkedIn feed items.

## Updating Publications & Embedding LinkedIn Posts

1. **Add a publication**: Append an entry to `assets/publications.json` with `title`, `authors`, `journal`, `year`, `role`, `featured`, `link`, `highlight`, and `tags`.
2. **Embed a live LinkedIn post in `#news`**:
   - Open your post on LinkedIn, click **`⋯` → `Embed this post`**, and copy the iframe `src` URL (`https://www.linkedin.com/embed/feed/update/urn:li:...`).
   - Add an entry in `assets/news.json` setting `"embedUrl"` to that URL. The News feed renders the embedded LinkedIn post automatically inside the scrollable track.
