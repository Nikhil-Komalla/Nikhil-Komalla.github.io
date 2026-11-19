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
        id: "career-summer-2027",
        date: "2026 \u2022 Career Update",
        category: "Open to Work",
        title: "Open to Full-Time Opportunities Starting Summer 2027",
        summary: "Entering the final year of my Ph.D. at Penn State and open to full-time R&D roles starting Summer 2027 in Computational Materials Science, MLIP / AI-for-Science Engineering, and Clean Energy Catalysis.",
        tags: ["#OpenToWork", "#Summer2027", "#ComputationalMaterials", "#MLIP"],
        url: "https://www.linkedin.com/in/nikhil-komalla/",
        ctaLabel: "Connect on LinkedIn",
        embedUrl: ""
    },
    {
        id: "small-review-2026",
        date: "2026 \u2022 Publication",
        category: "First-Author Review",
        title: "Comprehensive Electrocatalyst Design Review Published in Small",
        summary: "Comprehensive first-author review in Small covering electronic structure descriptors and rational electrocatalyst design for hydrogen production via water electrolysis.",
        tags: ["#Small", "#GreenHydrogen", "#Electrocatalysis"],
        url: "https://doi.org/10.1002/smll.202511010",
        ctaLabel: "Read Review (DOI)",
        embedUrl: ""
    },
    {
        id: "mlip-screening-2026",
        date: "2026 \u2022 Research Milestone",
        category: "MLIP & HPC Workflows",
        title: "Fine-Tuning OC25 eSEN & Magnetic MACE/mMACE + Multi-MLIP Screening",
        summary: "Built multi-GPU A100 workflows for equivariant & magnetic MLIP fine-tuning, explicit microsolvation convergence, and committee-uncertainty active learning.",
        tags: ["#MachineLearning", "#MLIP", "#MACE", "#ActiveLearning"],
        url: "https://www.linkedin.com/in/nikhil-komalla/recent-activity/all/",
        ctaLabel: "View LinkedIn Activity",
        embedUrl: ""
    },
    {
        id: "aem-columbite-2025",
        date: "2025 \u2022 Publication",
        category: "Research Highlight",
        title: "Metal-Center Redox Mechanisms for AEM Water Electrolyzers in Advanced Energy Materials",
        summary: "Collaborative study in Advanced Energy Materials uncovering how multi-metal coordination centers in FeMn(NbTa)2O6 columbite oxides mediate intermediate adsorption and redox stability.",
        tags: ["#AdvancedEnergyMaterials", "#AEMWE", "#DFT", "#Catalysis"],
        url: "https://doi.org/10.1002/aenm.202404479",
        ctaLabel: "View Paper (DOI)",
        embedUrl: ""
    },
    {
        id: "water-splitting-2024",
        date: "2024 \u2022 Publications",
        category: "Catalysis & DFT",
        title: "New Insights into Heterostructured Electrocatalysts & TiO2/FeS2 Photocatalysts",
        summary: "Published two DFT-driven investigations in JCIS and PCCP explaining interfacial charge transfer and active-site synergy in earth-abundant and hybrid water-splitting systems.",
        tags: ["#JCIS", "#PCCP", "#Photocatalysis", "#WaterSplitting"],
        url: "https://scholar.google.com/citations?user=gJdg6OIAAAAJ",
        ctaLabel: "Google Scholar Profile",
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

function formatAuthors(authorsList) {
    if (!Array.isArray(authorsList) || authorsList.length === 0) {
        return "Authors unavailable";
    }
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

document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
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
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            e.preventDefault();
            const headerOffset = header ? header.offsetHeight : 70;
            const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - (targetId !== "#hero" ? headerOffset : 0);
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            if (navbar && navbar.classList.contains("active")) {
                navbar.classList.remove("active");
                const icon = mobileMenuToggle.querySelector("i");
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    });

    // Scroll spy for active nav tab highlight
    const sections = document.querySelectorAll("section[id]");
    if ("IntersectionObserver" in window && sections.length > 0) {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute("id");
                        navLinks.forEach(a => {
                            a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
                        });
                    }
                });
            },
            { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
        );
        sections.forEach(sec => observer.observe(sec));
    }

    const currentYearSpan = document.getElementById("current-year");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Highlighted Publications Renderer & Filtering ---
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
        if (filtered.length === 0) {
            pubListEl.innerHTML = `<li class="pub-card"><p class="pub-highlight">No publications match this filter.</p></li>`;
            return;
        }

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
                    ${featuredBadge}
                    ${roleBadge}
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

    // --- Scrollable News & LinkedIn Posts Feed ---
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
                    <a href="${escapeHtml(item.url || "https://www.linkedin.com/in/nikhil-komalla/")}" target="_blank" rel="noopener noreferrer" class="news-cta">
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
            if (resp.ok) {
                items = await resp.json();
            }
        } catch (_) {
            items = FALLBACK_NEWS;
        }
        if (newsLoadingEl) newsLoadingEl.style.display = "none";
        renderNews(items);
    }

    if (newsPrevBtn && newsTrackEl) {
        newsPrevBtn.addEventListener("click", () => {
            newsTrackEl.scrollBy({ left: -380, behavior: "smooth" });
        });
    }
    if (newsNextBtn && newsTrackEl) {
        newsNextBtn.addEventListener("click", () => {
            newsTrackEl.scrollBy({ left: 380, behavior: "smooth" });
        });
    }
    if (newsLayoutBtn && newsTrackEl) {
        newsLayoutBtn.addEventListener("click", function () {
            const isVertical = newsTrackEl.classList.toggle("vertical-mode");
            this.innerHTML = isVertical
                ? '<i class="fas fa-arrows-alt-h"></i> Horizontal Carousel'
                : '<i class="fas fa-arrows-alt-v"></i> Vertical Feed';
        });
    }

    initPublications();
    initNewsFeed();
});
