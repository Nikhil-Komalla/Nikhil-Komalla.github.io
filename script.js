// ==== script.js ====

const FALLBACK_PUBLICATIONS = [
    {
        title: "Rational Design Strategies Toward Efficient and Stable Electrocatalysts for Hydrogen Production via Water Electrolysis: A Comprehensive Review",
        authors: ["Nikhil Komalla", "Nelson Y. Dzade"],
        journal: "Small",
        year: 2026,
        role: "First Author \u2022 Comprehensive Review",
        featured: true,
        link: "https://doi.org/10.1002/smll.202511010",
        highlight: "Synthesizes mechanistic descriptors, electronic structure tuning, and rational design principles for high-activity, durable HER and OER electrocatalysts.",
        tags: ["Electrocatalysis", "Water Electrolysis", "Green Hydrogen", "Comprehensive Review"]
    },
    {
        title: "Understanding the Metal-Center Mediated Adsorption and Redox Mechanisms in a FeMn(NbTa)2O6 Columbite Material for Anion Exchange Membrane Water Electrolyzers",
        authors: ["Patrick M. Bacirhonde", "Devendra Shrestha", "Kyoungin Kang", "Esensil Man Hia", "Nikhil Komalla", "Nelson Y. Dzade", "et al."],
        journal: "Advanced Energy Materials",
        year: 2025,
        role: "Co-Author \u2022 Computational Catalysis",
        featured: true,
        link: "https://doi.org/10.1002/aenm.202404479",
        highlight: "Elucidates metal-center intermediate adsorption thermodynamics and redox switching mechanisms enabling efficient AEM water electrolysis.",
        tags: ["AEMWE", "OER / HER", "First-Principles DFT", "High-Entropy Oxide"]
    },
    {
        title: "Molybdenum oxide/nickel molybdenum oxide heterostructures hybridized active platinum co-catalyst toward superb-efficiency water splitting catalysis",
        authors: ["Thi Luu Luyen Doan", "Dinh Chuong Nguyen", "Nikhil Komalla", "Nguyen V. Hieu", "Lam Nguyen-Dinh", "Nelson Y. Dzade", "Cheol Sang Kim", "Chan Hee Park"],
        journal: "Journal of Colloid and Interface Science",
        year: 2024,
        role: "Co-Author \u2022 DFT Modeling",
        featured: false,
        link: "https://doi.org/10.1016/j.jcis.2024.04.175",
        highlight: "Quantifies interfacial charge redistribution and hydrogen adsorption free energies across Pt-hybridized MoO2/NiMoO4 heterostructures.",
        tags: ["Water Splitting", "Heterostructures", "DFT"]
    },
    {
        title: "Unraveling the origin of the high photocatalytic properties of earth-abundant TiO2/FeS2 heterojunctions: insights from first-principles density functional theory",
        authors: ["Oluwayomi F. Awe", "Henry I. Eya", "Ricardo Amaral", "Nikhil Komalla", "Pascal Nbelayim", "Nelson Y. Dzade"],
        journal: "Physical Chemistry Chemical Physics",
        year: 2024,
        role: "Co-Author \u2022 First-Principles DFT",
        featured: false,
        link: "https://doi.org/10.1039/d3cp04453j",
        highlight: "Reveals band alignment, interfacial charge separation, and surface electronic structure driving enhanced photocatalytic efficiency in TiO2/FeS2.",
        tags: ["Photocatalysis", "Heterojunctions", "Electronic Structure"]
    },
    {
        title: "Ruthenium Engineered A2B2O6-Hybrid Columbite Ferrite for Bifunctional pH-Universal Water Splitting",
        authors: ["Patrick M. Bacirhonde", "Ahmed Yousef Mohamed", "Byounggun Han", "Deok-Yong Cho", "Shrestha Devendra", "Nikhil Komalla", "Nelson Y. Dzade", "et al."],
        journal: "Advanced Energy Materials",
        year: 2023,
        role: "Co-Author \u2022 Electronic Structure & Catalysis",
        featured: true,
        link: "https://doi.org/10.1002/aenm.202300174",
        highlight: "Demonstrates how Ru site engineering tailors d-band electronics and bifunctional HER/OER overpotentials across acidic and alkaline media.",
        tags: ["pH-Universal", "Bifunctional Catalysis", "DFT"]
    }
];

const FALLBACK_NEWS = [
    {
        id: "grc-catalysis-2026",
        date: "2026 \u2022 Gordon Research Conference",
        category: "Conference Poster",
        title: "Poster Presentation at Gordon Research Conference (GRC) \u2013 Catalysis, USA",
        summary: "Presented our latest DFT and machine-learned interatomic potential (MLIP) insights on transition-metal sulfide & oxide electrocatalysts at GRC Catalysis. Open to full-time roles starting Summer 2027.",
        tags: ["#GRCCatalysis", "#DFT", "#MLIP", "#GreenHydrogen"],
        url: "https://www.linkedin.com/in/nikhil-komalla/recent-activity/all/",
        ctaLabel: "LinkedIn Activity",
        embedUrl: ""
    },
    {
        id: "osi-hackathon-2026",
        date: "Oct 2026 \u2022 Hackathon",
        category: "OSI Hackathon 2026",
        title: "Usefulness Boundary Hub (osi-mlips) \u2014 Open Scientific Intelligence Hackathon #147",
        summary: "Co-built a multi-lens MLIP evaluation hub mapping MACE and NequIP usefulness boundaries across Descriptive failure modes, Mechanistic notes, and Bayesian UQ with a grounded model recommender.",
        tags: ["#OSIHackathon2026", "#MLIP", "#MACE", "#NequIP"],
        url: "https://scientificintelligence.org/campaigns/osi-hackathon-2026/submissions/147",
        ctaLabel: "Submission #147",
        embedUrl: ""
    },
    {
        id: "atominfer-c0mpiled6",
        date: "2026 \u2022 Hackathon",
        category: "c0mpiled-6 Hackathon",
        title: "Team AtomInfer \u2014 Agent Turning Experimental Data into Atomic Structures",
        summary: "Built an agentic web platform (FastAPI + Three.js + HRMC) with Anirban Phukan and Nishant Mishra to parse experimental XRD/Raman spectra and output DFT-ready atomic structures.",
        tags: ["#AtomInfer", "#AgenticAI", "#c0mpiled6", "#MaterialsProject"],
        url: "https://www.compiled.sh/articles/c0mpiled-6-ai-for-productivity-research#team-atominfer",
        ctaLabel: "Read Article",
        embedUrl: ""
    },
    {
        id: "small-review-2026",
        date: "2026 \u2022 Publication",
        category: "First-Author Review",
        title: "Comprehensive Water Electrolysis Catalyst Design Review Published in Small",
        summary: "First-author review with Dr. Nelson Y. Dzade synthesized rational electronic-structure modulation and computational design rules for durable green hydrogen electrocatalysts.",
        tags: ["#Small", "#Electrocatalysis", "#WaterSplitting"],
        url: "https://doi.org/10.1002/smll.202511010",
        ctaLabel: "Read Paper (DOI)",
        embedUrl: ""
    },
    {
        id: "isf5-uk-2025",
        date: "2025 \u2022 International Talk",
        category: "Conference Oral (UK)",
        title: "International Oral Presentation at 5th International Solar Fuels Conference (ISF-5)",
        summary: "Delivered an international oral presentation in the UK showcasing computational discovery, doping strategies, and explicit solvation dynamics of water-splitting materials.",
        tags: ["#ISF5", "#SolarFuels", "#Photocatalysis", "#AIMD"],
        url: "https://www.linkedin.com/in/nikhil-komalla/recent-activity/all/",
        ctaLabel: "LinkedIn Activity",
        embedUrl: ""
    },
    {
        id: "nam29-vastola-2025",
        date: "2025 \u2022 Talk & Award",
        category: "NAM29 & Scholarship",
        title: "Oral Talk at NAM29 (USA) & Frank J. Vastola Graduate Scholarship",
        summary: "Presented oral research at the 29th North American Catalysis Society Meeting (NAM29) and received Penn State's Vastola Graduate Scholarship.",
        tags: ["#NAM29", "#Catalysis", "#PennState", "#Award"],
        url: "https://www.linkedin.com/in/nikhil-komalla/recent-activity/all/",
        ctaLabel: "LinkedIn Activity",
        embedUrl: ""
    },
    {
        id: "aem-columbite-2025",
        date: "2025 \u2022 Publication",
        category: "Adv. Energy Mater.",
        title: "Metal-Center Redox Mechanisms in FeMn(NbTa)2O6 Columbite for AEM Electrolyzers",
        summary: "Published in Advanced Energy Materials elucidating metal-center adsorption thermodynamics and redox switching mechanisms enabling durable AEMWE catalysts.",
        tags: ["#AdvEnergyMater", "#AEMWE", "#DFT"],
        url: "https://doi.org/10.1002/aenm.202404479",
        ctaLabel: "View Paper (DOI)",
        embedUrl: ""
    },
    {
        id: "hydrogen-americas-2024",
        date: "2024 \u2022 First Place Award",
        category: "Award & Honors",
        title: "1st Place Student Poster at Hydrogen Americas Summit & 2x Best Presentation Honors",
        summary: "Awarded First Place Student Poster at Hydrogen Americas 2024 Summit following Second Place at Penn State's 2023 Graduate Research Exhibition.",
        tags: ["#HydrogenAmericas", "#BestPoster", "#GreenHydrogen"],
        url: "https://www.linkedin.com/in/nikhil-komalla/",
        ctaLabel: "View Profile",
        embedUrl: ""
    }
];

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function escapeLatex(str) {
    return String(str)
        .replace(/\\/g, "\\textbackslash{}")
        .replace(/([&%$#_{}])/g, "\\$1")
        .replace(/~/g, "\\textasciitilde{}")
        .replace(/\^/g, "\\textasciicircum{}");
}

function formatAuthors(authorsList) {
    if (!Array.isArray(authorsList) || authorsList.length === 0) return "Authors unavailable";
    const display = authorsList.length > 10
        ? [...authorsList.slice(0, 6), "et al.", ...authorsList.slice(-2)]
        : authorsList;
    return display
        .map(name => {
            const safe = escapeHtml(name);
            return /komalla/i.test(safe) ? `<strong>${safe}</strong>` : safe;
        })
        .join(", ");
}

function generateLatexForCategory(data, categoryKey, opts) {
    const cat = (data.categories && data.categories[categoryKey]) || Object.values(data.categories)[0];
    const h = data.header;
    const expById = {};
    (data.researchExperiences || []).forEach(e => { expById[e.id] = e; });

    const orderedIds = cat.experienceOrder || Object.keys(expById);
    const filteredExp = orderedIds
        .map(id => expById[id])
        .filter(Boolean)
        .filter(e => opts.includeTeaching || (e.id !== "psu_gta" && e.id !== "krest"));

    const lines = [
        "% Auto-generated tailored LaTeX resume — Nikhil Komalla",
        `% Track: ${cat.label}`,
        "\\documentclass[10pt,letterpaper]{article}",
        "\\usepackage[margin=0.55in]{geometry}",
        "\\usepackage{titlesec}",
        "\\usepackage{enumitem}",
        "\\usepackage[hidelinks]{hyperref}",
        "\\pagestyle{empty}",
        "\\titleformat{\\section}{\\large\\bfseries\\uppercase}{}{0em}{}[\\titlerule]",
        "\\titlespacing*{\\section}{0pt}{8pt}{4pt}",
        "\\setlist[itemize]{noitemsep, topsep=2pt, leftmargin=1.4em}",
        "",
        "\\begin{document}",
        "\\begin{center}",
        `  {\\LARGE \\textbf{${escapeLatex(h.name)}}} \\\\[3pt]`,
        `  {\\textbf{${escapeLatex(cat.targetRole)}}} \\\\[3pt]`,
        `  ${escapeLatex(h.location)} $\\cdot$ \\href{mailto:${h.email}}{${escapeLatex(h.email)}} $\\cdot$ \\href{mailto:${h.psuEmail}}{${escapeLatex(h.psuEmail)}} \\\\`,
        `  \\href{${h.linkedin}}{LinkedIn} $\\cdot$ \\href{${h.scholar}}{Google Scholar} $\\cdot$ \\href{${h.orcid}}{ORCID} $\\cdot$ \\href{${h.github}}{GitHub} $\\cdot$ \\href{${h.groupUrl}}{${escapeLatex(h.groupName)}}`,
        "\\end{center}",
        "",
        "\\section{Objective}",
        `${escapeLatex(cat.summary)} (${escapeLatex(h.availability)}).`,
        "",
        "\\section{Education}"
    ];

    (data.education || []).forEach(edu => {
        lines.push(`\\noindent\\textbf{${escapeLatex(edu.institution)}} \\hfill \\textit{${escapeLatex(edu.period)}} \\\\`);
        lines.push(`${escapeLatex(edu.degree)} (${escapeLatex(edu.gpa)})`);
        lines.push("\\begin{itemize}");
        lines.push(`  \\item Relevant Coursework: ${escapeLatex(edu.coursework)}`);
        lines.push("\\end{itemize}");
    });

    lines.push("", "\\section{Technical Skills}", "\\begin{itemize}");
    (cat.skillGroups || []).forEach(sg => {
        lines.push(`  \\item \\textbf{${escapeLatex(sg.name)}:} ${escapeLatex(sg.items)}`);
    });
    lines.push("\\end{itemize}");

    lines.push("", "\\section{Research \\& Professional Experience}");
    filteredExp.forEach(exp => {
        lines.push(`\\noindent\\textbf{${escapeLatex(exp.title)}} \\hfill \\textit{${escapeLatex(exp.period)}} \\\\`);
        lines.push(`\\textit{${escapeLatex(exp.organization)}}`);
        lines.push("\\begin{itemize}");
        (exp.bullets || []).forEach(b => {
            lines.push(`  \\item ${escapeLatex(b)}`);
        });
        lines.push("\\end{itemize}\\vspace{3pt}");
    });

    if (opts.includeHackathons && Array.isArray(data.hackathons) && data.hackathons.length > 0) {
        lines.push("", "\\section{Hackathons \\& Scientific Software}", "\\begin{itemize}");
        data.hackathons.forEach(hk => {
            lines.push(`  \\item \\textbf{\\href{${hk.url}}{${escapeLatex(hk.name)}}:} ${escapeLatex(hk.summary)}`);
        });
        lines.push("\\end{itemize}");
    }

    lines.push("", "\\section{Selected Publications}", "\\begin{itemize}");
    (data.publications || []).forEach(pub => {
        lines.push(`  \\item ${escapeLatex(pub)}`);
    });
    lines.push("\\end{itemize}");

    if (opts.includeAwards) {
        lines.push("", "\\section{Honors, Awards \\& Presentations}", "\\begin{itemize}");
        (data.awards || []).forEach(a => lines.push(`  \\item ${escapeLatex(a)}`));
        (data.conferences || []).forEach(c => lines.push(`  \\item ${escapeLatex(c)}`));
        lines.push("\\end{itemize}");
    }

    lines.push("", "\\end{document}");
    return lines.join("\n");
}

function renderResumePreviewHtml(data, categoryKey, opts) {
    const cat = (data.categories && data.categories[categoryKey]) || Object.values(data.categories)[0];
    const h = data.header;
    const expById = {};
    (data.researchExperiences || []).forEach(e => { expById[e.id] = e; });
    const filteredExp = (cat.experienceOrder || Object.keys(expById))
        .map(id => expById[id])
        .filter(Boolean)
        .filter(e => opts.includeTeaching || (e.id !== "psu_gta" && e.id !== "krest"));

    const eduHtml = (data.education || []).map(edu => `
        <div class="latex-entry-row"><span>${escapeHtml(edu.institution)}</span><span>${escapeHtml(edu.period)}</span></div>
        <div class="latex-entry-sub">${escapeHtml(edu.degree)} (${escapeHtml(edu.gpa)})</div>
        <ul class="latex-bullets"><li><strong>Coursework:</strong> ${escapeHtml(edu.coursework)}</li></ul>
    `).join("");

    const skillsHtml = (cat.skillGroups || []).map(sg =>
        `<div class="latex-skill-line"><strong>${escapeHtml(sg.name)}:</strong> ${escapeHtml(sg.items)}</div>`
    ).join("");

    const expHtml = filteredExp.map(exp => `
        <div class="latex-entry-row"><span>${escapeHtml(exp.title)}</span><span>${escapeHtml(exp.period)}</span></div>
        <div class="latex-entry-sub">${escapeHtml(exp.organization)}</div>
        <ul class="latex-bullets">${(exp.bullets || []).map(b => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
    `).join("");

    const hackHtml = opts.includeHackathons ? `
        <div class="latex-sec-title">Hackathons &amp; Scientific Software</div>
        <ul class="latex-bullets">${(data.hackathons || []).map(hk =>
            `<li><strong><a href="${escapeHtml(hk.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(hk.name)}</a>:</strong> ${escapeHtml(hk.summary)}</li>`
        ).join("")}</ul>
    ` : "";

    const awardsHtml = opts.includeAwards ? `
        <div class="latex-sec-title">Honors, Awards &amp; Presentations</div>
        <ul class="latex-bullets">${[...(data.awards || []), ...(data.conferences || [])].map(a => `<li>${escapeHtml(a)}</li>`).join("")}</ul>
    ` : "";

    return `
        <div class="latex-sheet-header">
            <h3>${escapeHtml(h.name)}</h3>
            <div class="latex-sheet-role">${escapeHtml(cat.targetRole)} &bull; ${escapeHtml(h.availability)}</div>
            <div class="latex-sheet-contact">
                ${escapeHtml(h.location)} &bull; <a href="mailto:${escapeHtml(h.email)}">${escapeHtml(h.email)}</a> &bull;
                <a href="${escapeHtml(h.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a> &bull;
                <a href="${escapeHtml(h.scholar)}" target="_blank" rel="noopener noreferrer">Google Scholar</a> &bull;
                <a href="${escapeHtml(h.groupUrl)}" target="_blank" rel="noopener noreferrer">MMT Group</a>
            </div>
        </div>
        <div class="latex-sec-title">Objective</div>
        <p class="latex-skill-line">${escapeHtml(cat.summary)}</p>
        <div class="latex-sec-title">Education</div>
        ${eduHtml}
        <div class="latex-sec-title">Technical Skills (${escapeHtml(cat.label)})</div>
        ${skillsHtml}
        <div class="latex-sec-title">Research &amp; Professional Experience</div>
        ${expHtml}
        ${hackHtml}
        <div class="latex-sec-title">Publications</div>
        <ul class="latex-bullets">${(data.publications || []).map(p => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
        ${awardsHtml}
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    if (mobileMenuToggle && navbar) {
        mobileMenuToggle.addEventListener("click", function () {
            navbar.classList.toggle("active");
            const icon = mobileMenuToggle.querySelector("i");
            icon.classList.toggle("fa-bars", !navbar.classList.contains("active"));
            icon.classList.toggle("fa-times", navbar.classList.contains("active"));
        });
    }

    const navLinks = document.querySelectorAll('#navbar a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            const targetId = this.getAttribute("href");
            const targetEl = document.querySelector(targetId);
            if (!targetEl) return;
            e.preventDefault();
            const headerOffset = header ? header.offsetHeight : 70;
            const offsetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - (targetId !== "#hero" ? headerOffset : 0);
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            if (navbar && navbar.classList.contains("active")) {
                navbar.classList.remove("active");
                const icon = mobileMenuToggle.querySelector("i");
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    });

    const sections = document.querySelectorAll("section[id]");
    if ("IntersectionObserver" in window && sections.length > 0) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("id");
                        navLinks.forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
                    }
                });
            },
            { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
        );
        sections.forEach(sec => observer.observe(sec));
    }

    const yearSpan = document.getElementById("current-year");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // --- Publications ---
    let allPublications = [];
    const pubListEl = document.getElementById("publications-list");
    const pubLoadingEl = document.getElementById("publications-loading-message");
    const filterButtons = document.querySelectorAll(".pub-filter-btn");

    function renderPublications(filterKey) {
        if (!pubListEl) return;
        const filtered = allPublications.filter(pub => {
            if (filterKey === "all") return true;
            if (filterKey === "featured") return Boolean(pub.featured);
            return String(pub.year) === String(filterKey);
        });
        pubListEl.innerHTML = "";
        filtered.forEach(pub => {
            const li = document.createElement("li");
            li.className = `pub-card${pub.featured ? " featured" : ""}`;
            const tagsHtml = Array.isArray(pub.tags)
                ? `<div class="pub-tags">${pub.tags.map(t => `<span>${escapeHtml(t)}</span>`).join("")}</div>`
                : "";
            const featuredBadge = pub.featured
                ? `<span class="pub-badge pub-badge-featured"><i class="fas fa-star"></i> Highlighted</span>`
                : "";
            const roleBadge = pub.role
                ? `<span class="pub-badge pub-badge-role">${escapeHtml(pub.role)}</span>`
                : "";
            li.innerHTML = `
                <div class="pub-card-top">
                    <span class="pub-badge pub-badge-year">${escapeHtml(pub.year)}</span>
                    <span class="pub-badge pub-badge-journal">${escapeHtml(pub.journal)}</span>
                    ${featuredBadge}${roleBadge}
                </div>
                <div class="pub-title">${escapeHtml(pub.title)}</div>
                <div class="pub-authors">${formatAuthors(pub.authors)}</div>
                ${pub.highlight ? `<p class="pub-highlight">${escapeHtml(pub.highlight)}</p>` : ""}
                <div class="pub-card-footer">
                    ${tagsHtml}
                    ${pub.link ? `<a href="${escapeHtml(pub.link)}" target="_blank" rel="noopener noreferrer" class="pub-link">Read Paper <i class="fas fa-external-link-alt"></i></a>` : ""}
                </div>
            `;
            pubListEl.appendChild(li);
        });
    }

    async function initPublications() {
        try {
            const resp = await fetch("assets/publications.json?t=" + Date.now());
            allPublications = resp.ok ? await resp.json() : FALLBACK_PUBLICATIONS;
        } catch (_) {
            allPublications = FALLBACK_PUBLICATIONS;
        }
        if (pubLoadingEl) pubLoadingEl.style.display = "none";
        renderPublications("all");
    }

    filterButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            filterButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            renderPublications(this.dataset.filter || "all");
        });
    });

    // --- Scrollable News & LinkedIn Activities ---
    const newsTrackEl = document.getElementById("news-scroll-track");
    const newsLoadingEl = document.getElementById("news-loading-message");
    const newsPrevBtn = document.getElementById("news-prev");
    const newsNextBtn = document.getElementById("news-next");
    const newsLayoutBtn = document.getElementById("news-layout-toggle");

    function renderNews(items) {
        if (!newsTrackEl) return;
        newsTrackEl.innerHTML = "";
        items.forEach(item => {
            const card = document.createElement("article");
            card.className = "news-card";
            const hasEmbed = item.embedUrl && String(item.embedUrl).trim().startsWith("https://www.linkedin.com/embed/");
            const tagsHtml = Array.isArray(item.tags) && item.tags.length > 0
                ? `<div class="news-tags">${item.tags.map(t => `<span>${escapeHtml(t)}</span>`).join("")}</div>`
                : "";
            const bodyHtml = hasEmbed
                ? `<iframe class="linkedin-embed-frame" src="${escapeHtml(item.embedUrl)}" title="${escapeHtml(item.title || "LinkedIn Post")}" loading="lazy" allowfullscreen></iframe>`
                : `<p class="news-summary">${escapeHtml(item.summary || "")}</p>${tagsHtml}`;
            card.innerHTML = `
                <div>
                    <div class="news-card-meta">
                        <span class="news-category"><i class="fab fa-linkedin"></i> ${escapeHtml(item.category || "Update")}</span>
                        <span class="news-date">${escapeHtml(item.date || "")}</span>
                    </div>
                    <h3>${escapeHtml(item.title || "")}</h3>
                    ${bodyHtml}
                </div>
                <div class="news-card-footer">
                    <a href="${escapeHtml(item.url || "https://www.linkedin.com/in/nikhil-komalla/recent-activity/all/")}" target="_blank" rel="noopener noreferrer" class="news-cta">
                        ${escapeHtml(item.ctaLabel || "View on LinkedIn")} <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            `;
            newsTrackEl.appendChild(card);
        });
    }

    async function initNewsFeed() {
        let items = FALLBACK_NEWS;
        try {
            const resp = await fetch("assets/news.json?t=" + Date.now());
            if (resp.ok) items = await resp.json();
        } catch (_) {
            items = FALLBACK_NEWS;
        }
        if (newsLoadingEl) newsLoadingEl.style.display = "none";
        renderNews(items);
    }

    if (newsPrevBtn && newsTrackEl) {
        newsPrevBtn.addEventListener("click", () => newsTrackEl.scrollBy({ left: -380, behavior: "smooth" }));
    }
    if (newsNextBtn && newsTrackEl) {
        newsNextBtn.addEventListener("click", () => newsTrackEl.scrollBy({ left: 380, behavior: "smooth" }));
    }
    if (newsLayoutBtn && newsTrackEl) {
        newsLayoutBtn.addEventListener("click", function () {
            const isVertical = newsTrackEl.classList.toggle("vertical-mode");
            this.innerHTML = isVertical
                ? '<i class="fas fa-arrows-alt-h"></i> Horizontal Carousel'
                : '<i class="fas fa-arrows-alt-v"></i> Vertical Feed';
        });
    }

    // --- Resume Viewer & Live 5-Category LaTeX Engine ---
    let resumeData = null;
    let activeCategory = "catalysis";
    const tabBtns = document.querySelectorAll(".resume-tab-btn");
    const panelPdf = document.getElementById("resume-panel-pdf");
    const panelLatex = document.getElementById("resume-panel-latex");
    const catBtns = document.querySelectorAll(".resume-cat-btn");
    const optHack = document.getElementById("opt-hackathons");
    const optAwards = document.getElementById("opt-awards");
    const optTeach = document.getElementById("opt-teaching");
    const previewSheet = document.getElementById("latex-preview-sheet");
    const codeBlock = document.getElementById("latex-code-block");
    const codeContent = document.getElementById("latex-code-content");
    const viewPreviewBtn = document.getElementById("latex-view-preview");
    const viewCodeBtn = document.getElementById("latex-view-code");

    function getResumeOpts() {
        return {
            includeHackathons: optHack ? optHack.checked : true,
            includeAwards: optAwards ? optAwards.checked : true,
            includeTeaching: optTeach ? optTeach.checked : true
        };
    }

    function updateResumeViews() {
        if (!resumeData) return;
        const opts = getResumeOpts();
        if (previewSheet) previewSheet.innerHTML = renderResumePreviewHtml(resumeData, activeCategory, opts);
        if (codeContent) codeContent.textContent = generateLatexForCategory(resumeData, activeCategory, opts);
    }

    async function initResumeStudio() {
        try {
            const resp = await fetch("assets/resume_data.json?t=" + Date.now());
            if (resp.ok) resumeData = await resp.json();
        } catch (_) {
            resumeData = null;
        }
        updateResumeViews();
    }

    tabBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            const mode = this.dataset.mode;
            tabBtns.forEach(b => {
                const on = b === this;
                b.classList.toggle("active", on);
                b.setAttribute("aria-selected", on ? "true" : "false");
            });
            if (panelPdf && panelLatex) {
                panelPdf.classList.toggle("active", mode === "pdf");
                panelLatex.classList.toggle("active", mode === "latex");
            }
        });
    });

    catBtns.forEach(btn => {
        btn.addEventListener("click", function () {
            catBtns.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            activeCategory = this.dataset.category || "catalysis";
            updateResumeViews();
        });
    });

    [optHack, optAwards, optTeach].forEach(el => {
        if (el) el.addEventListener("change", updateResumeViews);
    });

    if (viewPreviewBtn && viewCodeBtn && previewSheet && codeBlock) {
        viewPreviewBtn.addEventListener("click", () => {
            viewPreviewBtn.classList.add("active");
            viewCodeBtn.classList.remove("active");
            previewSheet.hidden = false;
            codeBlock.hidden = true;
        });
        viewCodeBtn.addEventListener("click", () => {
            viewCodeBtn.classList.add("active");
            viewPreviewBtn.classList.remove("active");
            previewSheet.hidden = true;
            codeBlock.hidden = false;
        });
    }

    const copyBtn = document.getElementById("btn-copy-latex");
    if (copyBtn) {
        copyBtn.addEventListener("click", async function () {
            if (!codeContent) return;
            try {
                await navigator.clipboard.writeText(codeContent.textContent);
                const orig = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(() => { this.innerHTML = orig; }, 1800);
            } catch (_) {}
        });
    }

    const dlBtn = document.getElementById("btn-download-latex");
    if (dlBtn) {
        dlBtn.addEventListener("click", function () {
            if (!codeContent) return;
            const blob = new Blob([codeContent.textContent], { type: "application/x-tex;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `Nikhil_Komalla_Resume_${activeCategory}.tex`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);
        });
    }

    const overleafBtn = document.getElementById("btn-open-overleaf");
    if (overleafBtn) {
        overleafBtn.addEventListener("click", function () {
            if (!codeContent) return;
            const form = document.createElement("form");
            form.method = "POST";
            form.action = "https://www.overleaf.com/docs";
            form.target = "_blank";
            const input = document.createElement("input");
            input.type = "hidden";
            input.name = "snip";
            input.value = codeContent.textContent;
            form.appendChild(input);
            document.body.appendChild(form);
            form.submit();
            form.remove();
        });
    }

    const printBtn = document.getElementById("btn-print-tailored");
    if (printBtn) {
        printBtn.addEventListener("click", function () {
            if (!previewSheet) return;
            const win = window.open("", "_blank", "width=900,height=1050");
            if (!win) return;
            win.document.write(`<!DOCTYPE html><html><head><title>Nikhil Komalla - Tailored Resume</title>
                <style>
                    body { font-family: Georgia, serif; margin: 0.5in; color: #111; line-height: 1.45; }
                    .latex-sheet-header { text-align: center; border-bottom: 2px solid #1e407c; padding-bottom: 8px; margin-bottom: 12px; }
                    .latex-sheet-header h3 { font-size: 20pt; margin: 0; }
                    .latex-sheet-role { font-weight: bold; color: #1e407c; margin: 4px 0; }
                    .latex-sheet-contact { font-size: 9.5pt; }
                    .latex-sec-title { font-size: 11pt; font-weight: bold; text-transform: uppercase; color: #1e407c; border-bottom: 1px solid #999; margin: 12px 0 6px; }
                    .latex-entry-row { display: flex; justify-content: space-between; font-weight: bold; font-size: 10pt; margin-top: 5px; }
                    .latex-entry-sub { font-style: italic; font-size: 9.5pt; color: #333; margin-bottom: 2px; }
                    .latex-bullets { margin: 2px 0 4px 18px; padding: 0; font-size: 9.5pt; }
                    .latex-skill-line { font-size: 9.5pt; margin-bottom: 3px; }
                    a { color: #1e407c; text-decoration: none; }
                </style></head><body>${previewSheet.innerHTML}</body></html>`);
            win.document.close();
            win.focus();
            win.print();
        });
    }

    initPublications();
    initNewsFeed();
    initResumeStudio();
});
