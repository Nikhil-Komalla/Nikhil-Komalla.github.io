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
        summary: "Presented our latest DFT and machine-learned interatomic potential (MLIP) insights on transition-metal sulfide & oxide electrocatalysts at GRC Catalysis. Graduating May 2027 and open to full-time roles.",
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

const HACKATHONS_DATA = {
    atominfer: {
        id: "atominfer",
        eventBadge: "c0mpiled-6 Hackathon",
        yearTag: "Agentic AI \u2022 FastAPI + Three.js",
        title: "AtomInfer",
        subtitle: "Agentic AI Pipeline Converting Raw Experimental Data into Simulation-Ready Atomic Structures",
        description: "Built an interactive web application and multi-tool agent that transforms raw experimental XRD patterns, Raman spectra, and PDF data into DFT-ready crystal models. Combining Groq Llama-3.3-70B tool-calling, Nelson-Riley lattice extraction, Materials Project MPRester lookups, pymatgen supercell doping, and Hybrid Reverse Monte Carlo (HRMC) refinement, AtomInfer validates candidates against simulated XRD R-factors and exports CIF / VASP POSCAR directly into a Three.js 3D viewer.",
        highlights: [
            "XRD / Raman / PDF Parsing",
            "Groq Llama-3.3-70B Agent Loop",
            "Materials Project + pymatgen",
            "HRMC + XRD R-Factor Closed Loop"
        ],
        team: [
            { name: "Anirban Phukan", url: "https://www.linkedin.com/in/anirban-phukan277" },
            { name: "Nishant Mishra", url: "https://www.linkedin.com/in/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%A4-%E0%A4%AE%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%BE" },
            { name: "Nikhil Komalla", url: "https://www.linkedin.com/in/nikhil-komalla" }
        ],
        tags: ["FastAPI", "Three.js", "Materials Project", "pymatgen", "HRMC", "Groq LLM"],
        links: [
            { label: "Article", icon: "fas fa-newspaper", url: "https://www.compiled.sh/articles/c0mpiled-6-ai-for-productivity-research#team-atominfer", primary: false },
            { label: "GitHub", icon: "fab fa-github", url: "https://github.com/nishantaMishra/atomInfer", primary: false },
            { label: "Video Demo", icon: "fas fa-play-circle", url: "https://pennstateoffice365-my.sharepoint.com/:v:/g/personal/nxk5431_psu_edu/IQBhqkfxtd-WSZiakXbHsFgGAeFUHxXpHe4a8KAZfXqXNqs?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=hu0I7Q", primary: true }
        ],
        flowchartTitle: "AtomInfer Closed-Loop Agent Architecture",
        flowchart: {
            viewBox: "0 0 760 440",
            groupBoxes: [
                { x: 158, y: 20, w: 462, h: 312, label: "AtomInfer Agent Core Loop (FastAPI + WebSocket Streaming)" }
            ],
            nodes: [
                {
                    id: "query",
                    x: 16, y: 58, w: 120, h: 78,
                    role: "input",
                    title: "User Query",
                    sub: "XRD / Raman / File",
                    detail: "Accepts raw experimental XRD diffractograms, Raman spectra, PDF curves, or composition prompts through the single-page UI."
                },
                {
                    id: "researcher",
                    x: 16, y: 344, w: 156, h: 72,
                    role: "knowledge",
                    title: "Researcher DB",
                    sub: "Vector Literature Mining",
                    detail: "Supplies domain context, literature lattice baselines, and candidate crystal stoichiometry to guide agent reasoning."
                },
                {
                    id: "loader",
                    x: 176, y: 66, w: 128, h: 68,
                    role: "process",
                    title: "Data Loader",
                    sub: "Unit & Signal QC",
                    detail: "Inspects tabular files, normalizes 2-theta / intensity / wavenumber units, and prepares clean arrays for tool execution."
                },
                {
                    id: "llm",
                    x: 326, y: 66, w: 132, h: 68,
                    role: "agent",
                    title: "LLM Agent Core",
                    sub: "Groq Llama-3.3-70B",
                    detail: "Multi-provider orchestrator running task-assigned tool-calling loops to hypothesize phases, defects, and refinement actions."
                },
                {
                    id: "xrd_tools",
                    x: 480, y: 66, w: 126, h: 68,
                    role: "tool",
                    title: "XRD Tools",
                    sub: "parse_xrd & Nelson-Riley",
                    detail: "Extracts peak positions with parse_xrd_file and estimates true lattice parameter a0 via the Nelson-Riley extrapolation formula."
                },
                {
                    id: "mp_pymatgen",
                    x: 190, y: 192, w: 148, h: 74,
                    role: "database",
                    title: "MP + pymatgen",
                    sub: "MPRester API & Structure",
                    detail: "Queries Materials Project reference phases via proxied MPRester REST calls and instantiates symmetry-accurate pymatgen Structure cells."
                },
                {
                    id: "hrmc",
                    x: 358, y: 192, w: 134, h: 74,
                    role: "process",
                    title: "Supercell & HRMC",
                    sub: "Monte Carlo Refinement",
                    detail: "Builds doped supercells and executes server-side Hybrid Reverse Monte Carlo (HRMC) using MEAM/Buckingham potentials."
                },
                {
                    id: "validation",
                    x: 510, y: 192, w: 100, h: 74,
                    role: "validate",
                    title: "Validation",
                    sub: "XRD R-Factor",
                    detail: "Computes simulated vs. experimental XRD R-factor; triggers automatic parameter tuning back to XRD Tools & LLM Agent until converged."
                },
                {
                    id: "output",
                    x: 636, y: 186, w: 112, h: 86,
                    role: "output",
                    title: "Final Output",
                    sub: "CIF / POSCAR + 3D",
                    detail: "Exports simulation-ready CIF & VASP POSCAR files and renders an interactive Three.js 3D unit cell with CPK colors and bonds."
                }
            ],
            edges: [
                { from: "query", to: "loader", path: "M 136 97 L 176 97", kind: "primary" },
                { from: "researcher", to: "loader", path: "M 94 344 L 94 176 Q 94 162 110 162 L 220 162 Q 235 162 235 134", kind: "support" },
                { from: "researcher", to: "llm", path: "M 172 380 L 392 380 L 392 134", kind: "support" },
                { from: "loader", to: "llm", path: "M 304 100 L 326 100", kind: "primary" },
                { from: "llm", to: "xrd_tools", path: "M 458 100 L 480 100", kind: "primary" },
                { from: "xrd_tools", to: "mp_pymatgen", path: "M 543 134 L 543 158 L 264 158 L 264 192", kind: "primary" },
                { from: "mp_pymatgen", to: "hrmc", path: "M 338 229 L 358 229", kind: "primary" },
                { from: "hrmc", to: "validation", path: "M 492 229 L 510 229", kind: "primary" },
                { from: "validation", to: "output", path: "M 610 229 L 636 229", kind: "primary" },
                { from: "validation", to: "xrd_tools", path: "M 568 192 L 568 134", kind: "feedback", label: "Adjust Params", lx: 582, ly: 164 },
                { from: "validation", to: "llm", path: "M 560 266 L 560 306 L 392 306 L 392 134", kind: "feedback", label: "Iterate Agent Loop", lx: 476, ly: 318 }
            ]
        }
    },
    osi: {
        id: "osi",
        eventBadge: "OSI Hackathon 2026",
        yearTag: "Submission #147 \u2022 MLIP Epistemology",
        title: "Usefulness Boundary Hub (osi-mlips)",
        subtitle: "Evidence-Grounded MLIP Checkpoint Evaluation Across Descriptive, Mechanistic & Bayesian UQ Lenses",
        description: "Beyond leaderboard scores, atomistic researchers need to know exactly where an MLIP checkpoint works and where it breaks. Co-developed for Open Scientific Intelligence Hackathon 2026 (#147), Usefulness Boundary Hub organizes trained checkpoints (MACE-MP-0, MACE-OFF23, NequIP) into three parallel lenses—Descriptive failures, Mechanistic probes, and Bayesian UQ—paired with traceable variant lineage and an evidence-grounded Recommender.",
        highlights: [
            "Checkpoint-Level Mapping (MACE-MP-0, OFF23)",
            "Three Parallel Lenses (Descriptive / Mechanistic / UQ)",
            "Lineage & Known Failure Mode Graph",
            "Strictly Grounded Ollama Recommender"
        ],
        team: [
            { name: "Dara Akdag", url: "https://scientificintelligence.org/campaigns/osi-hackathon-2026/submissions/147" },
            { name: "Nikhil Komalla", url: "https://www.linkedin.com/in/nikhil-komalla" },
            { name: "Nishant Mishra", url: "https://www.linkedin.com/in/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%A4-%E0%A4%AE%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%BE" }
        ],
        tags: ["MLIP Checkpoints", "Bayesian UQ", "MACE / NequIP", "Scientific Honesty", "Recommender"],
        links: [
            { label: "OSI Submission #147", icon: "fas fa-trophy", url: "https://scientificintelligence.org/campaigns/osi-hackathon-2026/submissions/147", primary: false },
            { label: "GitHub", icon: "fab fa-github", url: "https://github.com/bawiz/osi-mlips", primary: false },
            { label: "Video Demo", icon: "fab fa-youtube", url: "https://youtu.be/oFlc0wbX8-0", primary: true }
        ],
        flowchartTitle: "Usefulness Boundary Hub Three-Lens Architecture",
        flowchart: {
            viewBox: "0 0 760 440",
            groupBoxes: [
                { x: 18, y: 356, w: 724, h: 72, label: "Scientific Honesty by Design: Graded Provenance Tiers" }
            ],
            nodes: [
                {
                    id: "community",
                    x: 132, y: 14, w: 224, h: 52,
                    role: "input",
                    title: "Structured Community Input",
                    sub: "Practitioner Usage & Annotations",
                    detail: "Captures real simulation reports (system class, run type, outcomes) and researcher annotations across active MLIP deployments."
                },
                {
                    id: "extractor",
                    x: 404, y: 14, w: 224, h: 52,
                    role: "agent",
                    title: "Extractor-Assisted Input",
                    sub: "AI-Drafted Citation & Failure Fields",
                    detail: "Extracts structured failure claims, test conditions, literature citations, and proposed mitigations from papers for curator review."
                },
                {
                    id: "hub",
                    x: 220, y: 90, w: 320, h: 54,
                    role: "database",
                    title: "Trained Checkpoint Hub",
                    sub: "MACE-MP-0, MACE-OFF23, NequIP Lineage",
                    detail: "Indexes specific trained weights (rather than broad architectures) along with derived Known Variants and Fixes relationships."
                },
                {
                    id: "useful",
                    x: 24, y: 100, w: 162, h: 46,
                    role: "output",
                    title: "Useful / Covered Area",
                    sub: "Validated Scope Regimes",
                    detail: "Highlights chemical domains, phases, and temperature windows with documented agreement against DFT ground truth."
                },
                {
                    id: "failure",
                    x: 574, y: 100, w: 162, h: 46,
                    role: "validate",
                    title: "Failure Modes / Limits",
                    sub: "Documented Breakdown Regimes",
                    detail: "Flags curator-named known failure modes (e.g., spin state shifts, bond cleavage drift, dispersion gaps, or coordination limits)."
                },
                {
                    id: "lens_desc",
                    x: 130, y: 170, w: 158, h: 66,
                    role: "process",
                    title: "Descriptive Lens",
                    sub: "Scope, Data & Graded Failures",
                    detail: "Documents training dataset coverage, inductive biases, and literature-graded Known Failure Modes (good for X, not for Y)."
                },
                {
                    id: "lens_mech",
                    x: 301, y: 170, w: 158, h: 66,
                    role: "tool",
                    title: "Mechanistic Lens",
                    sub: "Probing Internal Behavior",
                    detail: "Aggregates external interpretability probes and mechanistic findings on the checkpoint without claiming speculative Hub circuits."
                },
                {
                    id: "lens_uq",
                    x: 472, y: 170, w: 158, h: 66,
                    role: "knowledge",
                    title: "Uncertainty Lens",
                    sub: "Calibration & Shift Detection",
                    detail: "Separates Bayesian UQ by task purpose: calibration, error detection, OOD shift awareness, and MD rollout reliability."
                },
                {
                    id: "records",
                    x: 146, y: 266, w: 222, h: 60,
                    role: "tool",
                    title: "Traceable Failure Records",
                    sub: "Graph Lineage & Literature DOIs",
                    detail: "Connects every named failure and variant fix back to verifiable DOIs, reproduction conditions, and mitigation steps."
                },
                {
                    id: "recommender",
                    x: 392, y: 266, w: 222, h: 60,
                    role: "agent",
                    title: "Grounded Recommender",
                    sub: "Caveat-Preserving Selection",
                    detail: "Matches user simulation requirements strictly against curated Hub records and explicitly states missing coverage gaps."
                },
                {
                    id: "honesty_strip",
                    x: 36, y: 380, w: 688, h: 38,
                    role: "database",
                    title: "Literature Evidence  |  Community Observations  |  Illustrative Examples  |  Unevaluated Capabilities",
                    sub: "",
                    detail: "Core epistemic guarantee: every claim retains its provenance tier so unverified or unevaluated capabilities are never disguised as settled certainty."
                }
            ],
            edges: [
                { from: "community", to: "hub", path: "M 244 66 L 244 78 L 320 78 L 320 90", kind: "primary" },
                { from: "extractor", to: "hub", path: "M 516 66 L 516 78 L 440 78 L 440 90", kind: "primary" },
                { from: "hub", to: "useful", path: "M 220 117 L 186 117", kind: "success" },
                { from: "hub", to: "failure", path: "M 540 117 L 574 117", kind: "warn" },
                { from: "hub", to: "lens_desc", path: "M 300 144 L 300 156 L 209 156 L 209 170", kind: "primary" },
                { from: "hub", to: "lens_mech", path: "M 380 144 L 380 170", kind: "primary" },
                { from: "hub", to: "lens_uq", path: "M 460 144 L 460 156 L 551 156 L 551 170", kind: "primary" },
                { from: "useful", to: "records", path: "M 105 146 L 105 296 L 146 296", kind: "success" },
                { from: "failure", to: "recommender", path: "M 655 146 L 655 296 L 614 296", kind: "warn" },
                { from: "lens_desc", to: "records", path: "M 209 236 L 209 266", kind: "primary" },
                { from: "lens_mech", to: "records", path: "M 356 236 L 320 266", kind: "primary" },
                { from: "lens_mech", to: "recommender", path: "M 404 236 L 440 266", kind: "primary" },
                { from: "lens_uq", to: "recommender", path: "M 551 236 L 551 266", kind: "primary" },
                { from: "records", to: "honesty_strip", path: "M 257 326 L 257 380", kind: "support" },
                { from: "recommender", to: "honesty_strip", path: "M 503 326 L 503 380", kind: "support" }
            ]
        }
    },
    pcm: {
        id: "pcm",
        eventBadge: "MIT Energy & Climate Hack",
        yearTag: "COMSOL Problem Statement #1 \u2022 Team PCM's Got Latent",
        title: "Phase Change Materials for Cold Transportation",
        subtitle: "COMSOL Problem Statement: Dual-PCM & Adaptive Thermal Switch Architecture for Clean Cold-Chain Freight",
        description: "Addressing COMSOL's MIT Energy & Climate Hack Problem Statement (#1: Can phase change materials reduce total cost vs. traditional insulation?), our interdisciplinary team engineered a passive Dual-PCM + Adaptive Thermal Switch container. Validated with COMSOL 2D Heat Transfer with Phase Change (Apparent Heat Capacity method), the design achieves 111.2 hours of passive 2\u20134 \u00b0C thermal holdover with zero freeze risk while cutting 5-year total cost by 50% compared to active diesel reefers.",
        highlights: [
            "COMSOL 2D Free Triangular Mesh",
            "111.2 h Passive 2\u20134 \u00b0C Holdover",
            "Zero Freeze Injury (2.08 \u00b0C Tm)",
            "-50% 5-Yr TCO & 1.6-Yr Reefer Payback"
        ],
        team: [
            { name: "Shriram Ravikumar (Tufts Univ.)", url: "https://drive.google.com/file/d/1wG5LGMd0ky_kQAOmwnrB6vEO5vgVhtbU/view?usp=drive_link" },
            { name: "Muhammad Ali (Univ. of Houston)", url: "https://drive.google.com/file/d/1wG5LGMd0ky_kQAOmwnrB6vEO5vgVhtbU/view?usp=drive_link" },
            { name: "Nikhil Komalla (Penn State)", url: "https://www.linkedin.com/in/nikhil-komalla" },
            { name: "Nishant Mishra (Penn State)", url: "https://www.linkedin.com/in/%E0%A4%A8%E0%A4%BF%E0%A4%B6%E0%A4%BE%E0%A4%A8%E0%A5%8D%E0%A4%A4-%E0%A4%AE%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A4%BE" }
        ],
        tags: ["MIT Energy & Climate Hack", "COMSOL Multiphysics", "Dual-PCM", "Thermal Switches", "LCCA / TCO"],
        links: [
            { label: "Watch Presentation / Video Demo", icon: "fas fa-play-circle", url: "https://drive.google.com/file/d/1wG5LGMd0ky_kQAOmwnrB6vEO5vgVhtbU/view?usp=drive_link", primary: true }
        ],
        flowchartTitle: "MIT Energy & Climate Hack \u2014 COMSOL PCM Pipeline",
        flowchart: {
            viewBox: "0 0 760 440",
            groupBoxes: [
                { x: 184, y: 20, w: 374, h: 256, label: "Novel Adaptive Dual-PCM Architecture & COMSOL Physics" }
            ],
            nodes: [
                {
                    id: "challenge",
                    x: 16, y: 112, w: 142, h: 86,
                    role: "input",
                    title: "MIT Hack Prompt",
                    sub: "COMSOL Problem #1",
                    detail: "Can phase change materials (PCMs) reduce lifecycle total cost of ownership vs. foam + wet ice and diesel reefers in 2-4 C cold transport?"
                },
                {
                    id: "dual_pcm",
                    x: 204, y: 58, w: 158, h: 74,
                    role: "database",
                    title: "Dual-PCM Shell",
                    sub: "Inner 2.08 \u00b0C + Outer PCM",
                    detail: "Pairs an inner cargo-pinning PCM (Tm = 2.08 C to eliminate ice-burn risk) with a high-latent-heat outer buffering PCM + insulation layer."
                },
                {
                    id: "switches",
                    x: 204, y: 170, w: 158, h: 74,
                    role: "tool",
                    title: "Adaptive Switches",
                    sub: "Wax-Motor (kon/koff >= 100)",
                    detail: "Passive wax-motor thermal diodes decouple ambient heat gain during hot transit while accelerating pre-cooling recharge."
                },
                {
                    id: "comsol",
                    x: 386, y: 110, w: 154, h: 88,
                    role: "agent",
                    title: "COMSOL 2D Solver",
                    sub: "Apparent Heat Capacity",
                    detail: "Solves transient Heat Transfer with Phase Change across a Free Triangular Mesh, extracting 2D temperature & conductive flux profiles."
                },
                {
                    id: "holdover",
                    x: 576, y: 58, w: 164, h: 78,
                    role: "output",
                    title: "111.2 h Holdover",
                    sub: "Zero Freeze Risk (Passive)",
                    detail: "Maintains 2-4 C payload band passively for 111.2 h (beating 96 h diesel reefers and <18 h wet ice) with zero excursion injury."
                },
                {
                    id: "economics",
                    x: 576, y: 168, w: 164, h: 82,
                    role: "validate",
                    title: "-50% 5-Yr TCO",
                    sub: "$1,785 vs $3,570 Reefer",
                    detail: "Delivers $8.80/trip fuel savings ($528/yr net), 1.6-yr reefer payback, 58% IRR, and instant payback on trip #1 for biologics."
                },
                {
                    id: "roadmap",
                    x: 184, y: 318, w: 556, h: 88,
                    role: "knowledge",
                    title: "4-Phase Commercialization & Validation Roadmap",
                    sub: "M1-4: 200+ DSC Cycles  ->  M5-12: 10-Unit Fleet  ->  M13-19: ISTA 7E  ->  M20+: TPaaS Scale",
                    detail: "Bridges COMSOL 2D calibration -> 200+ DSC stability & 3D corner gasket verification -> ISTA 7E certification -> injection-molded (-40% BOM) TPaaS deployment."
                }
            ],
            edges: [
                { from: "challenge", to: "dual_pcm", path: "M 158 138 L 180 138 L 180 95 L 204 95", kind: "primary" },
                { from: "challenge", to: "switches", path: "M 158 172 L 180 172 L 180 207 L 204 207", kind: "primary" },
                { from: "dual_pcm", to: "comsol", path: "M 362 95 L 463 95 L 463 110", kind: "primary" },
                { from: "switches", to: "comsol", path: "M 362 207 L 463 207 L 463 198", kind: "primary" },
                { from: "comsol", to: "holdover", path: "M 540 136 L 560 136 L 560 97 L 576 97", kind: "success" },
                { from: "comsol", to: "economics", path: "M 540 172 L 560 172 L 560 209 L 576 209", kind: "primary" },
                { from: "holdover", to: "roadmap", path: "M 658 136 L 658 152 L 566 152 L 566 318", kind: "support" },
                { from: "economics", to: "roadmap", path: "M 658 250 L 658 318", kind: "support" },
                { from: "roadmap", to: "comsol", path: "M 310 318 L 310 292 L 463 292 L 463 198", kind: "feedback", label: "200-Cycle DSC Calibration", lx: 386, ly: 286 }
            ]
        }
    }
};

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

const LATEX_ESCAPE_MAP = {
    "\\": "\\textbackslash{}",
    "&": "\\&",
    "%": "\\%",
    "$": "\\$",
    "#": "\\#",
    "_": "\\_",
    "{": "\\{",
    "}": "\\}",
    "~": "\\textasciitilde{}",
    "^": "\\textasciicircum{}"
};

function escapeLatex(str) {
    // First single-pass escape ASCII LaTeX metacharacters, then convert typographic Unicode symbols.
    return String(str)
        .replace(/[\\&%$#_{}~^]/g, ch => LATEX_ESCAPE_MAP[ch])
        .replace(/\u2014/g, "---")
        .replace(/\u2013/g, "--")
        .replace(/\u201c/g, "``")
        .replace(/\u201d/g, "''")
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/\u00b0/g, "$^\\circ$")
        .replace(/\u2265/g, "$\\ge$")
        .replace(/\u2264/g, "$\\le$")
        .replace(/\u0394/g, "$\\Delta$")
        .replace(/\u03c3/g, "$\\sigma$")
        .replace(/\u2192/g, "$\\rightarrow$")
        .replace(/\u2022/g, "$\\cdot$");
}

function escapeLatexUrl(url) {
    return String(url).replace(/_/g, "\\_").replace(/#/g, "\\#").replace(/%/g, "\\%");
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

function selectResumeSlices(data, categoryKey, opts) {
    const cat = (data.categories && data.categories[categoryKey]) || Object.values(data.categories)[0];
    const expById = {};
    (data.researchExperiences || []).forEach(e => { expById[e.id] = e; });

    // Strict 1-page budget: top 4 track-ordered experiences after optional toggle filter
    const orderedExp = (cat.experienceOrder || Object.keys(expById))
        .map(id => expById[id])
        .filter(Boolean)
        .filter(e => opts.includeTeaching || (e.id !== "psu_gta" && e.id !== "krest"))
        .slice(0, 4);

    const allPubs = data.publications || [];
    const pubIndices = Array.isArray(cat.featuredPubIndices) && cat.featuredPubIndices.length > 0
        ? cat.featuredPubIndices
        : [0, 1, 2];
    const selectedPubs = pubIndices.map(i => allPubs[i]).filter(Boolean);

    const compactHonors = (data.honorsCompact && data.honorsCompact.length > 0)
        ? data.honorsCompact
        : [...(data.awards || []).slice(0, 2), ...(data.conferences || []).slice(0, 2)];

    return { cat, orderedExp, selectedPubs, compactHonors };
}

function generateLatexForCategory(data, categoryKey, opts) {
    const h = data.header;
    const { cat, orderedExp, selectedPubs, compactHonors } = selectResumeSlices(data, categoryKey, opts);

    const lines = [
        "% Jake's Resume 1-Page LaTeX Template — Tailored for Nikhil Komalla",
        `% Track: ${cat.label} | Graduation: May 2027`,
        "\\documentclass[letterpaper,10pt]{article}",
        "\\usepackage{latexsym}",
        "\\usepackage[empty]{fullpage}",
        "\\usepackage{titlesec}",
        "\\usepackage{marvosym}",
        "\\usepackage[usenames,dvipsnames]{color}",
        "\\usepackage{verbatim}",
        "\\usepackage{enumitem}",
        "\\usepackage[hidelinks]{hyperref}",
        "\\usepackage{fancyhdr}",
        "\\usepackage[english]{babel}",
        "\\usepackage{tabularx}",
        "\\input{glyphtounicode}",
        "\\pagestyle{fancy}",
        "\\fancyhf{}",
        "\\fancyfoot{}",
        "\\renewcommand{\\headrulewidth}{0pt}",
        "\\renewcommand{\\footrulewidth}{0pt}",
        "\\addtolength{\\oddsidemargin}{-0.55in}",
        "\\addtolength{\\evensidemargin}{-0.55in}",
        "\\addtolength{\\textwidth}{1.1in}",
        "\\addtolength{\\topmargin}{-0.6in}",
        "\\addtolength{\\textheight}{1.2in}",
        "\\urlstyle{same}",
        "\\raggedbottom",
        "\\raggedright",
        "\\setlength{\\tabcolsep}{0in}",
        "\\titleformat{\\section}{\\vspace{-5pt}\\scshape\\raggedright\\large}{}{0em}{}[\\color{black}\\titlerule \\vspace{-5pt}]",
        "\\pdfgentounicode=1",
        "\\newcommand{\\resumeItem}[1]{\\item\\small{#1 \\vspace{-2pt}}}",
        "\\newcommand{\\resumeSubheading}[4]{\\vspace{-2pt}\\item\\begin{tabular*}{0.97\\textwidth}[t]{l@{\\extracolsep{\\fill}}r}\\textbf{#1} & #2 \\\\\\textit{\\small #3} & \\textit{\\small #4} \\\\\\end{tabular*}\\vspace{-7pt}}",
        "\\newcommand{\\resumeProjectHeading}[2]{\\item\\begin{tabular*}{0.97\\textwidth}{l@{\\extracolsep{\\fill}}r}\\small#1 & #2 \\\\\\end{tabular*}\\vspace{-7pt}}",
        "\\newcommand{\\resumeSubHeadingListStart}{\\begin{itemize}[leftmargin=0.15in, label={}]\\setlength\\itemsep{1pt}}",
        "\\newcommand{\\resumeSubHeadingListEnd}{\\end{itemize}}",
        "\\newcommand{\\resumeItemListStart}{\\begin{itemize}\\setlength\\itemsep{0pt}}",
        "\\newcommand{\\resumeItemListEnd}{\\end{itemize}\\vspace{-5pt}}",
        "",
        "\\begin{document}",
        "\\begin{center}",
        `  \\textbf{\\Huge \\scshape ${escapeLatex(h.name)}} \\\\ \\vspace{2pt}`,
        `  \\small \\textbf{${escapeLatex(cat.targetRole)}} $|$ ${escapeLatex(h.availability)} \\\\ \\vspace{1pt}`,
        `  \\small ${escapeLatex(h.location)} $|$ \\href{mailto:${h.email}}{${escapeLatex(h.email)}} $|$ \\href{${escapeLatexUrl(h.linkedin)}}{LinkedIn} $|$ \\href{${escapeLatexUrl(h.scholar)}}{Google Scholar} $|$ \\href{${escapeLatexUrl(h.github)}}{GitHub} $|$ \\href{${escapeLatexUrl(h.groupUrl)}}{${escapeLatex(h.groupName)}}`,
        "\\end{center}\\vspace{-10pt}",
        "",
        "\\section{Education}",
        "  \\resumeSubHeadingListStart"
    ];

    (data.education || []).forEach(edu => {
        lines.push(`    \\resumeSubheading{${escapeLatex(edu.institution)}}{${escapeLatex(edu.location)}}{${escapeLatex(edu.degree)}}{${escapeLatex(edu.period)}}`);
    });
    lines.push("  \\resumeSubHeadingListEnd\\vspace{-6pt}");

    lines.push("", "\\section{Technical Skills}", "  \\begin{itemize}[leftmargin=0.15in, label={}]");
    lines.push("    \\small{\\item{");
    (cat.skillGroups || []).forEach((sg, idx) => {
        const tail = idx < cat.skillGroups.length - 1 ? " \\\\[2pt]" : "";
        lines.push(`      \\textbf{${escapeLatex(sg.name)}}{: ${escapeLatex(sg.items)}}${tail}`);
    });
    lines.push("    }}");
    lines.push("  \\end{itemize}\\vspace{-8pt}");

    lines.push("", "\\section{Experience}", "  \\resumeSubHeadingListStart");
    orderedExp.forEach(exp => {
        const orgLine = `${exp.organization}${exp.location ? " (" + exp.location + ")" : ""}`;
        lines.push(`    \\resumeSubheading{${escapeLatex(exp.title)}}{${escapeLatex(exp.period)}}{${escapeLatex(orgLine)}}{}`);
        lines.push("      \\resumeItemListStart");
        (exp.bullets || []).forEach(b => {
            lines.push(`        \\resumeItem{${escapeLatex(b)}}`);
        });
        lines.push("      \\resumeItemListEnd");
    });
    lines.push("  \\resumeSubHeadingListEnd\\vspace{-6pt}");

    if (opts.includeHackathons && Array.isArray(data.hackathons) && data.hackathons.length > 0) {
        lines.push("", "\\section{Hackathons \\& Scientific Software}", "  \\resumeSubHeadingListStart");
        data.hackathons.forEach(hk => {
            lines.push(`    \\resumeProjectHeading{\\textbf{${escapeLatex(hk.name)}} $|$ \\href{${escapeLatexUrl(hk.url)}}{\\underline{Project Link}}}{}`);
            lines.push("      \\resumeItemListStart");
            lines.push(`        \\resumeItem{${escapeLatex(hk.summary)}}`);
            lines.push("      \\resumeItemListEnd");
        });
        lines.push("  \\resumeSubHeadingListEnd\\vspace{-6pt}");
    }

    lines.push("", "\\section{Selected Publications}", "  \\begin{itemize}[leftmargin=0.15in]\\setlength\\itemsep{1pt}");
    selectedPubs.forEach(pub => {
        lines.push(`    \\item \\small{${escapeLatex(pub)}}`);
    });
    lines.push(`    \\item \\small{\\textit{Full list (5 peer-reviewed articles, 2 books):} \\href{${escapeLatexUrl(h.scholar)}}{Google Scholar Profile}}`);
    lines.push("  \\end{itemize}\\vspace{-6pt}");

    if (opts.includeAwards && compactHonors.length > 0) {
        lines.push("", "\\section{Honors \\& Presentations}", "  \\begin{itemize}[leftmargin=0.15in]\\setlength\\itemsep{1pt}");
        compactHonors.forEach(item => {
            lines.push(`    \\item \\small{${escapeLatex(item)}}`);
        });
        lines.push("  \\end{itemize}");
    }

    lines.push("", "\\end{document}");
    return lines.join("\n");
}

function renderResumePreviewHtml(data, categoryKey, opts) {
    const h = data.header;
    const { cat, orderedExp, selectedPubs, compactHonors } = selectResumeSlices(data, categoryKey, opts);

    const eduHtml = (data.education || []).map(edu => `
        <div class="jake-row">
            <span class="jake-bold">${escapeHtml(edu.institution)}</span>
            <span class="jake-right">${escapeHtml(edu.location)}</span>
        </div>
        <div class="jake-row jake-sub">
            <span>${escapeHtml(edu.degree)}</span>
            <span class="jake-right">${escapeHtml(edu.period)}</span>
        </div>
    `).join("");

    const skillsHtml = (cat.skillGroups || []).map(sg =>
        `<div class="latex-skill-line"><strong>${escapeHtml(sg.name)}:</strong> ${escapeHtml(sg.items)}</div>`
    ).join("");

    const expHtml = orderedExp.map(exp => `
        <div class="jake-exp-block">
            <div class="jake-row">
                <span class="jake-bold">${escapeHtml(exp.title)}</span>
                <span class="jake-right">${escapeHtml(exp.period)}</span>
            </div>
            <div class="jake-sub">${escapeHtml(exp.organization)}${exp.location ? ` (${escapeHtml(exp.location)})` : ""}</div>
            <ul class="latex-bullets">${(exp.bullets || []).map(b => `<li>${escapeHtml(b)}</li>`).join("")}</ul>
        </div>
    `).join("");

    const hackHtml = opts.includeHackathons ? `
        <div class="latex-sec-title">Hackathons &amp; Scientific Software</div>
        ${(data.hackathons || []).map(hk => `
            <div class="jake-proj-block">
                <div class="jake-row">
                    <span><strong><a href="${escapeHtml(hk.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(hk.name)}</a></strong></span>
                    <span class="jake-right"><a href="${escapeHtml(hk.url)}" target="_blank" rel="noopener noreferrer">Link</a></span>
                </div>
                <ul class="latex-bullets"><li>${escapeHtml(hk.summary)}</li></ul>
            </div>
        `).join("")}
    ` : "";

    const awardsHtml = opts.includeAwards ? `
        <div class="latex-sec-title">Honors &amp; Presentations</div>
        <ul class="latex-bullets">${compactHonors.map(a => `<li>${escapeHtml(a)}</li>`).join("")}</ul>
    ` : "";

    return `
        <div class="latex-sheet-header">
            <h3>${escapeHtml(h.name)}</h3>
            <div class="latex-sheet-role">${escapeHtml(cat.targetRole)} &bull; ${escapeHtml(h.availability)}</div>
            <div class="latex-sheet-contact">
                ${escapeHtml(h.location)} &bull; <a href="mailto:${escapeHtml(h.email)}">${escapeHtml(h.email)}</a> &bull;
                <a href="${escapeHtml(h.linkedin)}" target="_blank" rel="noopener noreferrer">LinkedIn</a> &bull;
                <a href="${escapeHtml(h.scholar)}" target="_blank" rel="noopener noreferrer">Google Scholar</a> &bull;
                <a href="${escapeHtml(h.github)}" target="_blank" rel="noopener noreferrer">GitHub</a> &bull;
                <a href="${escapeHtml(h.groupUrl)}" target="_blank" rel="noopener noreferrer">MMT Group</a>
            </div>
        </div>
        <div class="latex-sec-title">Education</div>
        ${eduHtml}
        <div class="latex-sec-title">Technical Skills (${escapeHtml(cat.label)})</div>
        ${skillsHtml}
        <div class="latex-sec-title">Experience</div>
        ${expHtml}
        ${hackHtml}
        <div class="latex-sec-title">Selected Publications</div>
        <ul class="latex-bullets">
            ${selectedPubs.map(p => `<li>${escapeHtml(p)}</li>`).join("")}
            <li><em>Full publication list (5 peer-reviewed articles, 2 books) on <a href="${escapeHtml(h.scholar)}" target="_blank" rel="noopener noreferrer">Google Scholar</a>.</em></li>
        </ul>
        ${awardsHtml}
    `;
}

// --- Interactive Hackathon Flowchart SVG Builder ---
const FLOW_ROLE_STYLES = {
    input: { fill: "#eff6ff", stroke: "#2563eb", header: "#1e40af", text: "#0f172a" },
    agent: { fill: "#eef2ff", stroke: "#4f46e5", header: "#3730a3", text: "#0f172a" },
    process: { fill: "#f0fdf4", stroke: "#16a34a", header: "#166534", text: "#0f172a" },
    tool: { fill: "#e0f2fe", stroke: "#0284c7", header: "#0369a1", text: "#0f172a" },
    database: { fill: "#ecfdf5", stroke: "#059669", header: "#065f46", text: "#0f172a" },
    validate: { fill: "#fff7ed", stroke: "#ea580c", header: "#9a3412", text: "#0f172a" },
    output: { fill: "#f0f9ff", stroke: "#1e407c", header: "#122952", text: "#0f172a" },
    knowledge: { fill: "#faf5ff", stroke: "#7c3aed", header: "#5b21b6", text: "#0f172a" }
};

function buildHackathonFlowSvg(hack) {
    const fc = hack.flowchart;
    const prefix = `flow-${hack.id}`;

    const groupsHtml = (fc.groupBoxes || []).map(g => `
        <g class="flow-group">
            <rect x="${g.x}" y="${g.y}" width="${g.w}" height="${g.h}" rx="12" fill="rgba(30, 64, 124, 0.04)" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="6 4"/>
            <text x="${g.x + 12}" y="${g.y + 18}" fill="#1e407c" font-size="11.5" font-weight="700" font-family="Poppins, sans-serif">${escapeHtml(g.label)}</text>
        </g>
    `).join("");

    const edgesHtml = (fc.edges || []).map((e, idx) => {
        let stroke = "#4a90e2";
        let marker = `url(#${prefix}-arrow)`;
        let dash = "";
        let cls = "flow-edge";
        if (e.kind === "feedback") {
            stroke = "#ea580c";
            marker = `url(#${prefix}-arrow-fb)`;
            dash = 'stroke-dasharray="6 4"';
            cls += " flow-edge-feedback";
        } else if (e.kind === "success") {
            stroke = "#16a34a";
            marker = `url(#${prefix}-arrow-ok)`;
        } else if (e.kind === "warn") {
            stroke = "#dc2626";
            marker = `url(#${prefix}-arrow-fb)`;
        } else if (e.kind === "support") {
            stroke = "#64748b";
            marker = `url(#${prefix}-arrow-sub)`;
            dash = 'stroke-dasharray="4 3"';
        }
        const labelHtml = e.label
            ? `<text x="${e.lx}" y="${e.ly}" text-anchor="middle" fill="${stroke}" font-size="10" font-weight="600" font-family="Open Sans, sans-serif">${escapeHtml(e.label)}</text>`
            : "";
        return `
            <g class="${cls}" data-from="${escapeHtml(e.from)}" data-to="${escapeHtml(e.to)}" data-edge-idx="${idx}">
                <path d="${escapeHtml(e.path)}" fill="none" stroke="${stroke}" stroke-width="2" ${dash} marker-end="${marker}"/>
                ${labelHtml}
            </g>
        `;
    }).join("");

    const nodesHtml = (fc.nodes || []).map((n, idx) => {
        const st = FLOW_ROLE_STYLES[n.role] || FLOW_ROLE_STYLES.process;
        const cx = n.x + n.w / 2;
        const hasSub = Boolean(n.sub);
        const titleY = hasSub ? n.y + n.h / 2 - 4 : n.y + n.h / 2 + 4;
        const subY = n.y + n.h / 2 + 13;
        return `
            <g class="flow-node flow-role-${escapeHtml(n.role)}${idx === 0 ? " active-node" : ""}" data-node-id="${escapeHtml(n.id)}" data-node-idx="${idx}" tabindex="0" role="button" aria-label="${escapeHtml(n.title)}: ${escapeHtml(n.sub || "")}">
                <rect x="${n.x}" y="${n.y}" width="${n.w}" height="${n.h}" rx="10" fill="${st.fill}" stroke="${st.stroke}" stroke-width="2"/>
                <rect x="${n.x}" y="${n.y}" width="${n.w}" height="6" rx="3" fill="${st.stroke}"/>
                <text x="${cx}" y="${titleY}" text-anchor="middle" fill="${st.header}" font-size="11.5" font-weight="700" font-family="Poppins, sans-serif">${escapeHtml(n.title)}</text>
                ${hasSub ? `<text x="${cx}" y="${subY}" text-anchor="middle" fill="${st.text}" font-size="9.6" font-weight="600" font-family="Open Sans, sans-serif" opacity="0.86">${escapeHtml(n.sub)}</text>` : ""}
            </g>
        `;
    }).join("");

    return `
        <svg class="flowchart-svg" viewBox="${escapeHtml(fc.viewBox)}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeHtml(hack.flowchartTitle)}">
            <defs>
                <marker id="${prefix}-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#4a90e2"/>
                </marker>
                <marker id="${prefix}-arrow-fb" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#ea580c"/>
                </marker>
                <marker id="${prefix}-arrow-ok" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#16a34a"/>
                </marker>
                <marker id="${prefix}-arrow-sub" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#64748b"/>
                </marker>
            </defs>
            ${groupsHtml}
            ${edgesHtml}
            ${nodesHtml}
        </svg>
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

    // --- Hero IMEC-Inspired Interactive 3D Wavefunction PDE + Dropping Glass Bloch Sphere & Rising Bump ---
    function initHeroLatticeCanvas() {
        const heroEl = document.getElementById("hero");
        const canvas = document.getElementById("hero-lattice-canvas");
        if (!heroEl || !canvas || !canvas.getContext) return;
        const ctx = canvas.getContext("2d");

        const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let width = 0;
        let height = 0;
        let heroVisible = true;
        let rafId = null;
        let lastTimeMs = 0;

        const NX = 52;
        const NY = 30;
        const STRIDE = NX + 1;
        const TOTAL_NODES = STRIDE * (NY + 1);
        const U_MIN = -3.2;
        const U_MAX = 3.2;
        const V_MIN = -1.85;
        const V_MAX = 1.85;
        const DU = (U_MAX - U_MIN) / NX;
        const DV = (V_MAX - V_MIN) / NY;

        // Preallocated 2D wave PDE buffers
        let hPrev = new Float32Array(TOTAL_NODES);
        let hCurr = new Float32Array(TOTAL_NODES);
        let hNext = new Float32Array(TOTAL_NODES);

        // Preallocated projected vertex grid
        const grid = Array.from({ length: NY + 1 }, () =>
            Array.from({ length: NX + 1 }, () => ({ sx: 0, sy: 0, z: 0, u: 0, v: 0, alphaMask: 1, depth: 1 }))
        );

        let targetCamX = 0;
        let targetCamY = 0;
        let camX = 0;
        let camY = 0;
        let hoverZone = "center";

        const ball = {
            state: reduceMotion ? "landed" : "idle",
            u: -2.15,
            v: 0.08,
            targetU: -2.15,
            targetV: 0.08,
            z: reduceMotion ? -0.82 : 2.8,
            vz: 0,
            radius3D: 0.56,
            wellDepth: reduceMotion ? 1.0 : 0,
            opacity: reduceMotion ? 1.0 : 0
        };

        const bump = {
            u: 2.15,
            v: -0.06,
            targetU: 2.15,
            targetV: -0.06,
            strength: reduceMotion ? 0.78 : 0.18,
            targetStrength: reduceMotion ? 0.78 : 0.18
        };

        function resizeCanvas() {
            const rect = heroEl.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = Math.max(320, rect.width);
            height = Math.max(420, rect.height);
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        function injectWaveRipple(u0, v0, amplitude, radius) {
            const r2 = radius * radius;
            for (let j = 1; j < NY; j++) {
                const v = V_MIN + j * DV;
                const dv = v - v0;
                if (dv * dv > r2 * 4.5) continue;
                for (let i = 1; i < NX; i++) {
                    const u = U_MIN + i * DU;
                    const du = u - u0;
                    const d2 = du * du + dv * dv;
                    if (d2 > r2 * 4.5) continue;
                    const idx = j * STRIDE + i;
                    const nextVal = hCurr[idx] + amplitude * Math.exp(-d2 / r2);
                    hCurr[idx] = Math.max(-1.4, Math.min(1.4, nextVal));
                }
            }
        }

        function stepWavePDE() {
            for (let j = 1; j < NY; j++) {
                const row = j * STRIDE;
                for (let i = 1; i < NX; i++) {
                    const idx = row + i;
                    const lap = hCurr[idx - 1] + hCurr[idx + 1] + hCurr[idx - STRIDE] + hCurr[idx + STRIDE] - 4 * hCurr[idx];
                    const vel = (hCurr[idx] - hPrev[idx]) * 0.972;
                    let val = hCurr[idx] + vel + 0.16 * lap - 0.015 * hCurr[idx];
                    if (val > 1.5) val = 1.5;
                    else if (val < -1.5) val = -1.5;
                    hNext[idx] = val;
                }
            }
            // Fixed Dirichlet boundary = 0
            for (let i = 0; i <= NX; i++) {
                hNext[i] = 0;
                hNext[NY * STRIDE + i] = 0;
            }
            for (let j = 0; j <= NY; j++) {
                hNext[j * STRIDE] = 0;
                hNext[j * STRIDE + NX] = 0;
            }
            const tmp = hPrev;
            hPrev = hCurr;
            hCurr = hNext;
            hNext = tmp;
        }

        function evalStaticFeatures(u, v, t) {
            const ambientWave = 0.06 * Math.cos(1.8 * u - 0.9 * v - t * 1.0) * Math.exp(-(u * u * 0.08 + v * v * 0.14));
            const dbU = u - ball.u;
            const dbV = v - ball.v;
            const leftWell = -1.45 * ball.wellDepth * Math.exp(-((dbU * dbU + dbV * dbV) / 0.56));
            const drU = u - bump.u;
            const drV = v - bump.v;
            const rightBump = 1.22 * bump.strength * Math.exp(-((drU * drU + drV * drV) / 0.64));
            return ambientWave + leftWell + rightBump;
        }

        function samplePdeHeight(u, v) {
            const fi = Math.max(0, Math.min(NX - 0.001, (u - U_MIN) / DU));
            const fj = Math.max(0, Math.min(NY - 0.001, (v - V_MIN) / DV));
            const i0 = Math.floor(fi);
            const j0 = Math.floor(fj);
            const tx = fi - i0;
            const ty = fj - j0;
            const idx00 = j0 * STRIDE + i0;
            const a = hCurr[idx00] * (1 - tx) + hCurr[idx00 + 1] * tx;
            const b = hCurr[idx00 + STRIDE] * (1 - tx) + hCurr[idx00 + STRIDE + 1] * tx;
            return a * (1 - ty) + b * ty;
        }

        function evalTotalZ(u, v, t) {
            return evalStaticFeatures(u, v, t) + samplePdeHeight(u, v);
        }

        function projectPoint(u, v, z, cosYaw, sinYaw, cosPitch, sinPitch) {
            const x1 = u * cosYaw - v * sinYaw;
            const y1 = u * sinYaw + v * cosYaw;
            const y2 = y1 * cosPitch - z * sinPitch;
            const z2 = y1 * sinPitch + z * cosPitch;
            const fov = 6.8;
            const persp = fov / (fov + y2 + 5.6);
            const scale = Math.min(width * 0.25, height * 0.45) * persp;
            const sx = width * 0.5 + x1 * scale * 1.18;
            const sy = height * 0.62 - z2 * scale * 0.92;

            // Keep center hero copy clear while maximizing flank/depth legibility
            const cdx = (sx - width * 0.5) / (width * 0.35);
            const cdy = (sy - height * 0.44) / (height * 0.32);
            const cDist = Math.hypot(cdx, cdy);
            const tCenter = Math.min(1, Math.max(0, (cDist - 0.35) / 0.85));
            const centerFade = 0.06 + 0.76 * (tCenter * tCenter * (3 - 2 * tCenter));

            const edgeU = Math.max(0, 1 - Math.pow(Math.abs(u) / 3.45, 3.2));
            const edgeV = Math.max(0, 1 - Math.pow(Math.abs(v) / 2.02, 3.0));
            const dofFade = edgeU * edgeV * Math.min(1, Math.max(0.25, persp * 1.45));

            return { sx, sy, scale, persp, alphaMask: centerFade * dofFade };
        }

        function sheetColor(z, alpha) {
            let r, g, b;
            if (z < -0.15) {
                // Warped cyan-teal gravity well glow
                const k = Math.min(1, (-0.15 - z) / 1.15);
                r = 56 - 11 * k;
                g = 189 + 46 * k;
                b = 248 + 7 * k;
            } else if (z <= 0.18) {
                const k = (z + 0.15) / 0.33;
                r = 45 + 11 * k;
                g = 212 - 23 * k;
                b = 232 + 16 * k;
            } else {
                // Rising bump crest: electric cyan -> luminous gold-amber -> violet glint
                const k = Math.min(1, (z - 0.18) / 0.95);
                r = 56 + 195 * k;
                g = 189 + 6 * k;
                b = 248 - 196 * k;
            }
            return `rgba(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)}, ${Math.min(0.95, Math.max(0, alpha)).toFixed(3)})`;
        }

        function updatePhysics(dt, t) {
            const easeCam = reduceMotion ? 1 : 0.08;
            camX += (targetCamX - camX) * easeCam;
            camY += (targetCamY - camY) * easeCam;

            bump.u += (bump.targetU - bump.u) * 0.11;
            bump.v += (bump.targetV - bump.v) * 0.11;
            bump.strength += (bump.targetStrength - bump.strength) * 0.09;

            if (ball.state === "dropping") {
                ball.u += (ball.targetU - ball.u) * 0.08;
                ball.v += (ball.targetV - ball.v) * 0.08;
                ball.opacity = Math.min(1, ball.opacity + dt * 5.2);
                ball.vz -= 9.5 * dt;
                ball.z += ball.vz * dt;

                const meshZ = evalTotalZ(ball.u, ball.v, t);
                const restingCenterZ = meshZ + ball.radius3D * 0.62;
                if (ball.z <= restingCenterZ) {
                    const impactSpeed = Math.abs(ball.vz);
                    ball.z = restingCenterZ;
                    if (impactSpeed > 0.65) {
                        injectWaveRipple(ball.u, ball.v, -Math.min(0.65, 0.24 + impactSpeed * 0.085), 0.44);
                        injectWaveRipple(bump.u, bump.v, 0.18, 0.42);
                        bump.targetStrength = Math.max(bump.targetStrength, 0.88);
                        ball.vz = impactSpeed * 0.40;
                    } else {
                        ball.vz = 0;
                        ball.state = "landed";
                    }
                }
                ball.wellDepth += (1.0 - ball.wellDepth) * Math.min(1, dt * 8.0);
            } else if (ball.state === "landed") {
                const prevU = ball.u;
                const prevV = ball.v;
                ball.u += (ball.targetU - ball.u) * 0.12;
                ball.v += (ball.targetV - ball.v) * 0.12;
                if (hoverZone === "left" && Math.hypot(ball.u - prevU, ball.v - prevV) > 0.025) {
                    injectWaveRipple(ball.u, ball.v, -0.055, 0.34);
                }
                ball.wellDepth += (1.0 - ball.wellDepth) * 0.12;
                ball.opacity += (1.0 - ball.opacity) * 0.12;
                ball.z = evalTotalZ(ball.u, ball.v, t) + ball.radius3D * 0.54;
            } else if (ball.state === "lifting") {
                ball.wellDepth += (0.06 - ball.wellDepth) * 0.08;
                ball.opacity += (0.0 - ball.opacity) * 0.065;
                ball.z += 1.45 * dt;
                if (ball.opacity < 0.02) {
                    ball.opacity = 0;
                    ball.state = "idle";
                }
            }

            if (hoverZone === "right" && Math.hypot(bump.targetU - bump.u, bump.targetV - bump.v) > 0.035) {
                injectWaveRipple(bump.u, bump.v, 0.055, 0.36);
            }
        }

        function drawBlochSphere(t, cosYaw, sinYaw, cosPitch, sinPitch) {
            if (ball.opacity <= 0.02) return;
            const proj = projectPoint(ball.u, ball.v, ball.z, cosYaw, sinYaw, cosPitch, sinPitch);
            const cx = proj.sx;
            const cy = proj.sy;
            const rPx = Math.max(22, ball.radius3D * proj.scale);

            ctx.save();
            ctx.globalAlpha = ball.opacity;

            // Pass 1: Caustic golden-cyan reflection pool inside depressed trough underneath sphere
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            const floorProj = projectPoint(ball.u, ball.v, evalTotalZ(ball.u, ball.v, t) + 0.03, cosYaw, sinYaw, cosPitch, sinPitch);
            const caustic = ctx.createRadialGradient(floorProj.sx, floorProj.sy, 2, floorProj.sx, floorProj.sy, rPx * 1.45);
            caustic.addColorStop(0, "rgba(251, 191, 36, 0.34)");
            caustic.addColorStop(0.45, "rgba(45, 212, 191, 0.24)");
            caustic.addColorStop(1, "rgba(34, 211, 238, 0)");
            ctx.fillStyle = caustic;
            ctx.beginPath();
            ctx.ellipse(floorProj.sx, floorProj.sy, rPx * 1.45, rPx * 0.72, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // Helper to render 3D rotating golden geodesic rings split into back (z<0) and front (z>=0)
            function drawGeodesicRings(frontPass) {
                const rings = [
                    { rx: 1.0, ry: 0.0, rz: t * 0.42 },
                    { rx: 0.42, ry: Math.PI * 0.5, rz: t * 0.31 },
                    { rx: 1.18, ry: Math.PI * 0.28, rz: -t * 0.24 }
                ];
                const SEG = 54;
                rings.forEach(cfg => {
                    const cRx = Math.cos(cfg.rx), sRx = Math.sin(cfg.rx);
                    const cRy = Math.cos(cfg.ry), sRy = Math.sin(cfg.ry);
                    const cRz = Math.cos(cfg.rz), sRz = Math.sin(cfg.rz);
                    ctx.beginPath();
                    let penDown = false;
                    for (let k = 0; k <= SEG; k++) {
                        const a = (k / SEG) * Math.PI * 2;
                        let px = Math.cos(a);
                        let py = Math.sin(a);
                        let pz = 0;

                        // Rotate around Z
                        let tx = px * cRz - py * sRz;
                        let ty = px * sRz + py * cRz;
                        px = tx; py = ty;
                        // Rotate around X
                        ty = py * cRx - pz * sRx;
                        let tz = py * sRx + pz * cRx;
                        py = ty; pz = tz;
                        // Rotate around Y
                        tx = px * cRy + pz * sRy;
                        tz = -px * sRy + pz * cRy;
                        px = tx; pz = tz;

                        const isFront = pz >= 0;
                        if (isFront !== frontPass) {
                            penDown = false;
                            continue;
                        }
                        const sx = cx + px * rPx;
                        const sy = cy - py * rPx;
                        if (!penDown) {
                            ctx.moveTo(sx, sy);
                            penDown = true;
                        } else {
                            ctx.lineTo(sx, sy);
                        }
                    }
                    ctx.strokeStyle = frontPass ? "rgba(253, 224, 128, 0.88)" : "rgba(217, 119, 6, 0.28)";
                    ctx.lineWidth = frontPass ? 1.75 : 1.05;
                    ctx.stroke();
                });
            }

            // Pass 2: Back-half golden geodesic meridians
            drawGeodesicRings(false);

            // Pass 3: Translucent smoked-glass shell
            const glassGrad = ctx.createRadialGradient(
                cx + rPx * 0.28, cy - rPx * 0.30, rPx * 0.08,
                cx, cy, rPx
            );
            glassGrad.addColorStop(0, "rgba(18, 36, 62, 0.30)");
            glassGrad.addColorStop(0.58, "rgba(8, 16, 34, 0.56)");
            glassGrad.addColorStop(0.88, "rgba(28, 22, 18, 0.72)");
            glassGrad.addColorStop(1, "rgba(186, 230, 253, 0.44)");
            ctx.fillStyle = glassGrad;
            ctx.beginPath();
            ctx.arc(cx, cy, rPx, 0, Math.PI * 2);
            ctx.fill();

            // Pass 4: Glowing golden core atom + precessing 3D spin arrow |psi>
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            const coreGlow = ctx.createRadialGradient(cx, cy, 1, cx, cy, rPx * 0.48);
            coreGlow.addColorStop(0, "rgba(255, 252, 230, 1)");
            coreGlow.addColorStop(0.24, "rgba(251, 191, 36, 0.92)");
            coreGlow.addColorStop(0.55, "rgba(245, 158, 11, 0.34)");
            coreGlow.addColorStop(1, "rgba(245, 158, 11, 0)");
            ctx.fillStyle = coreGlow;
            ctx.beginPath();
            ctx.arc(cx, cy, rPx * 0.48, 0, Math.PI * 2);
            ctx.fill();

            // Spin vector shaft & conical arrowhead
            const phiSpin = 0.55 + Math.sin(t * 0.8) * 0.25;
            const thetaSpin = 0.78 + Math.cos(t * 0.65) * 0.14;
            const sxDir = Math.sin(thetaSpin) * Math.cos(phiSpin);
            const syDir = Math.cos(thetaSpin);
            const tipX = cx - sxDir * rPx * 0.78;
            const tipY = cy - syDir * rPx * 0.64;
            const tailX = cx + sxDir * rPx * 0.68;
            const tailY = cy + syDir * rPx * 0.54;

            ctx.strokeStyle = "rgba(253, 224, 128, 0.92)";
            ctx.lineWidth = 2.0;
            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(tipX, tipY);
            ctx.stroke();

            const ang = Math.atan2(tipY - tailY, tipX - tailX);
            const headLen = Math.max(7, rPx * 0.16);
            ctx.fillStyle = "#fef08a";
            ctx.beginPath();
            ctx.moveTo(tipX, tipY);
            ctx.lineTo(tipX - headLen * Math.cos(ang - 0.38), tipY - headLen * Math.sin(ang - 0.38));
            ctx.lineTo(tipX - headLen * Math.cos(ang + 0.38), tipY - headLen * Math.sin(ang + 0.38));
            ctx.closePath();
            ctx.fill();
            ctx.restore();

            // Pass 5: Front-half golden geodesic rings
            drawGeodesicRings(true);

            // Pass 6: Fresnel outer rim & upper-right glass specular crescent
            ctx.strokeStyle = "rgba(186, 230, 253, 0.58)";
            ctx.lineWidth = 1.6;
            ctx.beginPath();
            ctx.arc(cx, cy, rPx, 0, Math.PI * 2);
            ctx.stroke();

            ctx.strokeStyle = "rgba(255, 255, 255, 0.75)";
            ctx.lineWidth = 2.4;
            ctx.beginPath();
            ctx.arc(cx, cy, rPx - 2.5, -Math.PI * 0.42, -Math.PI * 0.08);
            ctx.stroke();

            ctx.restore();
        }

        function drawRightBumpEffects(t, cosYaw, sinYaw, cosPitch, sinPitch) {
            if (bump.strength <= 0.22) return;
            const intensity = Math.min(1, (bump.strength - 0.22) / 0.95);
            const apexZ = evalTotalZ(bump.u, bump.v, t) + 0.05;
            const apexProj = projectPoint(bump.u, bump.v, apexZ, cosYaw, sinYaw, cosPitch, sinPitch);

            // 1. Additive apex quantum bloom
            ctx.save();
            ctx.globalCompositeOperation = "lighter";
            const rad = 26 + 22 * intensity;
            const bloom = ctx.createRadialGradient(apexProj.sx, apexProj.sy, 2, apexProj.sx, apexProj.sy, rad);
            bloom.addColorStop(0, `rgba(253, 224, 128, ${(0.52 * intensity).toFixed(3)})`);
            bloom.addColorStop(0.5, `rgba(56, 189, 248, ${(0.28 * intensity).toFixed(3)})`);
            bloom.addColorStop(1, "rgba(56, 189, 248, 0)");
            ctx.fillStyle = bloom;
            ctx.beginPath();
            ctx.arc(apexProj.sx, apexProj.sy, rad, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // 2. Three concentric 3D iso-elevation contour rings projected onto the bump dome
            const ringRadii = [0.28, 0.56, 0.88];
            const STEPS = 36;
            ringRadii.forEach((rr, idx) => {
                ctx.beginPath();
                for (let k = 0; k <= STEPS; k++) {
                    const ang = (k / STEPS) * Math.PI * 2;
                    const u = bump.u + Math.cos(ang) * rr;
                    const v = bump.v + Math.sin(ang) * rr;
                    const z = evalTotalZ(u, v, t) + 0.025;
                    const p = projectPoint(u, v, z, cosYaw, sinYaw, cosPitch, sinPitch);
                    if (k === 0) ctx.moveTo(p.sx, p.sy);
                    else ctx.lineTo(p.sx, p.sy);
                }
                const ringAlpha = intensity * (0.68 - idx * 0.16);
                ctx.strokeStyle = idx === 0
                    ? `rgba(251, 191, 36, ${ringAlpha.toFixed(3)})`
                    : `rgba(103, 232, 249, ${ringAlpha.toFixed(3)})`;
                ctx.lineWidth = idx === 0 ? 1.7 : 1.15;
                ctx.stroke();
            });

            // 3. Gentle rising quantum crest sparks above apex
            if (!reduceMotion) {
                for (let s = 0; s < 5; s++) {
                    const phase = (t * 0.55 + s * 0.2) % 1;
                    const su = bump.u + Math.sin(s * 2.1 + t) * 0.26 * (1 - phase);
                    const sv = bump.v + Math.cos(s * 1.7 + t) * 0.22 * (1 - phase);
                    const sz = apexZ + phase * 0.58;
                    const sp = projectPoint(su, sv, sz, cosYaw, sinYaw, cosPitch, sinPitch);
                    ctx.fillStyle = `rgba(253, 224, 128, ${((1 - phase) * intensity * 0.8).toFixed(3)})`;
                    ctx.beginPath();
                    ctx.arc(sp.sx, sp.sy, 1.8, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        function drawFrame(nowMs) {
            const t = nowMs * 0.001;
            const dt = lastTimeMs > 0 ? Math.min(0.033, Math.max(0.001, (nowMs - lastTimeMs) * 0.001)) : 0.016;
            lastTimeMs = nowMs;

            if (!reduceMotion) {
                stepWavePDE();
                updatePhysics(dt, t);
            }

            const yaw = -0.10 + camX * 0.07;
            const pitch = 0.48 + camY * 0.05;
            const cosYaw = Math.cos(yaw);
            const sinYaw = Math.sin(yaw);
            const cosPitch = Math.cos(pitch);
            const sinPitch = Math.sin(pitch);

            for (let j = 0; j <= NY; j++) {
                const v = V_MIN + j * DV;
                const row = j * STRIDE;
                for (let i = 0; i <= NX; i++) {
                    const u = U_MIN + i * DU;
                    const z = evalStaticFeatures(u, v, t) + hCurr[row + i];
                    const p = projectPoint(u, v, z, cosYaw, sinYaw, cosPitch, sinPitch);
                    const cell = grid[j][i];
                    cell.sx = p.sx;
                    cell.sy = p.sy;
                    cell.z = z;
                    cell.u = u;
                    cell.v = v;
                    cell.alphaMask = p.alphaMask;
                }
            }

            ctx.clearRect(0, 0, width, height);

            // 1. Curved glowing wavefunction grid lines along u and v directions
            ctx.lineWidth = 1.05;
            for (let j = 0; j <= NY; j++) {
                for (let i = 0; i < NX; i++) {
                    const a = grid[j][i];
                    const b = grid[j][i + 1];
                    const zm = 0.5 * (a.z + b.z);
                    const baseAlpha = 0.5 * (a.alphaMask + b.alphaMask) * (0.44 + Math.min(0.42, Math.abs(zm) * 0.42));
                    if (baseAlpha < 0.03) continue;
                    ctx.strokeStyle = sheetColor(zm, baseAlpha);
                    ctx.beginPath();
                    ctx.moveTo(a.sx, a.sy);
                    ctx.lineTo(b.sx, b.sy);
                    ctx.stroke();
                }
            }
            for (let i = 0; i <= NX; i++) {
                for (let j = 0; j < NY; j++) {
                    const a = grid[j][i];
                    const b = grid[j + 1][i];
                    const zm = 0.5 * (a.z + b.z);
                    const baseAlpha = 0.5 * (a.alphaMask + b.alphaMask) * (0.36 + Math.min(0.42, Math.abs(zm) * 0.40));
                    if (baseAlpha < 0.03) continue;
                    ctx.strokeStyle = sheetColor(zm, baseAlpha);
                    ctx.beginPath();
                    ctx.moveTo(a.sx, a.sy);
                    ctx.lineTo(b.sx, b.sy);
                    ctx.stroke();
                }
            }

            // 2. Tiny glowing connecting dots at mesh vertices
            for (let j = 0; j <= NY; j++) {
                for (let i = 0; i <= NX; i++) {
                    const a = grid[j][i];
                    const dotAlpha = a.alphaMask * (0.50 + Math.min(0.45, Math.abs(a.z) * 0.45));
                    if (dotAlpha < 0.06) continue;
                    const rad = 1.15 + Math.min(0.95, Math.abs(a.z) * 0.58);
                    ctx.fillStyle = sheetColor(a.z, dotAlpha);
                    ctx.beginPath();
                    ctx.arc(a.sx, a.sy, rad, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            // 3. Right-side quantum bump iso-contours & apex light + Left-side 3D glass Bloch sphere
            drawRightBumpEffects(t, cosYaw, sinYaw, cosPitch, sinPitch);
            drawBlochSphere(t, cosYaw, sinYaw, cosPitch, sinPitch);
        }

        function tick(now) {
            if (!heroVisible || reduceMotion) return;
            drawFrame(now);
            rafId = window.requestAnimationFrame(tick);
        }

        function mapCursorToSurface(mx, my) {
            return {
                u: Math.max(-2.95, Math.min(2.95, (mx - width * 0.5) / (width * 0.145))),
                v: Math.max(-1.25, Math.min(1.25, -(my - height * 0.62) / (height * 0.22)))
            };
        }

        heroEl.addEventListener("mousemove", e => {
            const rect = heroEl.getBoundingClientRect();
            const mx = e.clientX - rect.left;
            const my = e.clientY - rect.top;
            targetCamX = Math.max(-1, Math.min(1, (mx / width - 0.5) * 2));
            targetCamY = Math.max(-1, Math.min(1, (my / height - 0.5) * 2));
            const mapped = mapCursorToSurface(mx, my);

            if (mx < width * 0.44) {
                hoverZone = "left";
                ball.targetU = Math.max(-2.95, Math.min(-1.55, mapped.u));
                ball.targetV = Math.max(-1.10, Math.min(1.05, mapped.v));
                if (ball.state === "idle" || ball.state === "lifting") {
                    ball.u = ball.targetU;
                    ball.v = ball.targetV;
                    ball.z = 2.65;
                    ball.vz = -0.5;
                    ball.state = "dropping";
                }
                bump.targetStrength = 0.88;
            } else if (mx > width * 0.56) {
                hoverZone = "right";
                bump.targetU = Math.max(1.55, Math.min(2.95, mapped.u));
                bump.targetV = Math.max(-1.10, Math.min(1.05, mapped.v));
                bump.targetStrength = 1.28;
                if (ball.state === "landed" || ball.state === "dropping") {
                    ball.state = "lifting";
                }
            } else {
                hoverZone = "center";
                bump.targetStrength = 0.22;
                if (ball.state === "landed" || ball.state === "dropping") {
                    ball.state = "lifting";
                }
            }
        });

        heroEl.addEventListener("mouseleave", () => {
            hoverZone = "center";
            targetCamX = 0;
            targetCamY = 0;
            bump.targetStrength = 0.16;
            if (ball.state === "landed" || ball.state === "dropping") {
                ball.state = "lifting";
            }
        });

        heroEl.addEventListener("click", e => {
            if (e.target && e.target.closest("a, button")) return;
            const rect = heroEl.getBoundingClientRect();
            const mx = e.clientX - rect.left;
            const my = e.clientY - rect.top;
            const mapped = mapCursorToSurface(mx, my);
            if (mx < width * 0.46) {
                ball.targetU = Math.max(-2.95, Math.min(-1.55, mapped.u));
                ball.targetV = Math.max(-1.10, Math.min(1.05, mapped.v));
                ball.u = ball.targetU;
                ball.v = ball.targetV;
                ball.z = 2.75;
                ball.vz = -0.7;
                ball.state = "dropping";
            } else if (mx > width * 0.54) {
                bump.targetU = Math.max(1.55, Math.min(2.95, mapped.u));
                bump.targetV = Math.max(-1.10, Math.min(1.05, mapped.v));
                bump.u = bump.targetU;
                bump.v = bump.targetV;
                bump.targetStrength = 1.32;
                injectWaveRipple(bump.u, bump.v, 0.62, 0.48);
            }
        });

        window.addEventListener("resize", () => {
            resizeCanvas();
            if (reduceMotion) drawFrame(0);
        });

        if ("IntersectionObserver" in window) {
            const heroObs = new IntersectionObserver(entries => {
                heroVisible = entries[0].isIntersecting;
                if (heroVisible && !reduceMotion && !rafId) {
                    lastTimeMs = 0;
                    rafId = window.requestAnimationFrame(tick);
                } else if (!heroVisible && rafId) {
                    window.cancelAnimationFrame(rafId);
                    rafId = null;
                }
            }, { threshold: 0.02 });
            heroObs.observe(heroEl);
        }

        resizeCanvas();
        drawFrame(0);
        if (!reduceMotion) {
            rafId = window.requestAnimationFrame(tick);
        }
    }

    // --- Interactive Hackathons Split Stage + Interactive SVG Flowcharts ---
    function initHackathonsShowcase() {
        const cards = document.querySelectorAll(".hackathon-card[data-hackathon]");
        const detailLeft = document.getElementById("hackathon-detail-left");
        const flowTitleEl = document.getElementById("flowchart-pane-title");
        const flowCanvas = document.getElementById("hackathon-flowchart-canvas");
        const inspectorEl = document.getElementById("hackathon-node-inspector");
        if (!detailLeft || !flowCanvas || !inspectorEl) return;

        let activeHackId = "atominfer";
        let hoverTimer = null;

        function setInspectorNode(hack, node) {
            if (!node) return;
            inspectorEl.innerHTML = `
                <div class="inspector-head">
                    <span class="inspector-badge">${escapeHtml(node.title)}</span>
                    ${node.sub ? `<span class="inspector-sub">${escapeHtml(node.sub)}</span>` : ""}
                </div>
                <p class="inspector-desc">${escapeHtml(node.detail)}</p>
            `;
            const svg = flowCanvas.querySelector("svg");
            if (!svg) return;
            svg.querySelectorAll(".flow-node").forEach(el => {
                el.classList.toggle("active-node", el.dataset.nodeId === node.id);
            });
            svg.querySelectorAll(".flow-edge").forEach(el => {
                const connected = el.dataset.from === node.id || el.dataset.to === node.id;
                el.classList.toggle("flow-edge-active", connected);
            });
        }

        function renderActiveHackathon(hackId) {
            const hack = HACKATHONS_DATA[hackId] || HACKATHONS_DATA.atominfer;
            activeHackId = hack.id;

            cards.forEach(card => {
                const on = card.dataset.hackathon === hack.id;
                card.classList.toggle("active", on);
                card.setAttribute("aria-selected", on ? "true" : "false");
            });

            const highlightsHtml = (hack.highlights || [])
                .map(item => `<li><i class="fas fa-check-circle"></i> ${escapeHtml(item)}</li>`)
                .join("");

            const teamHtml = (hack.team || [])
                .map(m => `<a href="${escapeHtml(m.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(m.name)}</a>`)
                .join(", ");

            const tagsHtml = (hack.tags || []).map(t => `<span>${escapeHtml(t)}</span>`).join("");

            const linksHtml = (hack.links || []).map(l => `
                <a href="${escapeHtml(l.url)}" target="_blank" rel="noopener noreferrer" class="hackathon-btn${l.primary ? " hackathon-btn-primary" : ""}">
                    <i class="${escapeHtml(l.icon)}"></i> ${escapeHtml(l.label)}
                </a>
            `).join("");

            detailLeft.innerHTML = `
                <div class="hackathon-detail-meta">
                    <span class="hackathon-badge">${escapeHtml(hack.eventBadge)}</span>
                    <span class="hackathon-year">${escapeHtml(hack.yearTag)}</span>
                </div>
                <h3 class="hackathon-detail-title">${escapeHtml(hack.title)}</h3>
                <p class="hackathon-detail-sub">${escapeHtml(hack.subtitle)}</p>
                <p class="hackathon-desc">${escapeHtml(hack.description)}</p>
                <ul class="hackathon-highlights">${highlightsHtml}</ul>
                <p class="hackathon-team"><strong>Team:</strong> ${teamHtml}</p>
                <div class="hackathon-tags">${tagsHtml}</div>
                <div class="hackathon-links">${linksHtml}</div>
            `;

            if (flowTitleEl) {
                flowTitleEl.innerHTML = `<i class="fas fa-diagram-project"></i> ${escapeHtml(hack.flowchartTitle)}`;
            }
            flowCanvas.innerHTML = buildHackathonFlowSvg(hack);

            const nodes = hack.flowchart.nodes || [];
            if (nodes.length > 0) setInspectorNode(hack, nodes[0]);

            flowCanvas.querySelectorAll(".flow-node").forEach(nodeEl => {
                const selectThisNode = () => {
                    const idx = Number(nodeEl.dataset.nodeIdx || 0);
                    setInspectorNode(hack, nodes[idx]);
                };
                nodeEl.addEventListener("mouseenter", selectThisNode);
                nodeEl.addEventListener("click", selectThisNode);
                nodeEl.addEventListener("keydown", e => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        selectThisNode();
                    }
                });
            });
        }

        cards.forEach(card => {
            const targetId = card.dataset.hackathon;
            card.addEventListener("click", () => {
                window.clearTimeout(hoverTimer);
                renderActiveHackathon(targetId);
            });
            card.addEventListener("mouseenter", () => {
                window.clearTimeout(hoverTimer);
                if (activeHackId === targetId) return;
                hoverTimer = window.setTimeout(() => renderActiveHackathon(targetId), 90);
            });
            card.addEventListener("mouseleave", () => {
                window.clearTimeout(hoverTimer);
            });
            card.addEventListener("keydown", e => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    renderActiveHackathon(targetId);
                }
            });
        });

        renderActiveHackathon("atominfer");
    }

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

    // --- Resume Viewer & Live 5-Category 1-Page Jake's LaTeX Engine ---
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
            win.document.write(`<!DOCTYPE html><html><head><title>Nikhil Komalla - Tailored 1-Page Resume</title>
                <style>
                    @page { size: letter; margin: 0.42in; }
                    body { font-family: Georgia, "Times New Roman", serif; margin: 0; color: #111; line-height: 1.28; font-size: 9.2pt; }
                    .latex-sheet-header { text-align: center; padding-bottom: 5px; margin-bottom: 7px; }
                    .latex-sheet-header h3 { font-size: 17pt; font-variant: small-caps; letter-spacing: 0.04em; margin: 0; }
                    .latex-sheet-role { font-weight: bold; font-size: 9.2pt; margin: 2px 0; }
                    .latex-sheet-contact { font-size: 8.4pt; }
                    .latex-sec-title { font-size: 9.8pt; font-weight: bold; font-variant: small-caps; letter-spacing: 0.04em; border-bottom: 1px solid #111; margin: 7px 0 3px; padding-bottom: 1px; }
                    .jake-row { display: flex; justify-content: space-between; font-size: 9pt; gap: 8px; }
                    .jake-bold { font-weight: bold; }
                    .jake-right { font-style: italic; white-space: nowrap; }
                    .jake-sub { font-style: italic; font-size: 8.6pt; color: #222; margin-bottom: 1px; }
                    .jake-exp-block, .jake-proj-block { margin-bottom: 4px; }
                    .latex-bullets { margin: 1px 0 3px 16px; padding: 0; font-size: 8.8pt; }
                    .latex-bullets li { margin-bottom: 1px; }
                    .latex-skill-line { font-size: 8.8pt; margin-bottom: 2px; }
                    a { color: #111; text-decoration: underline; }
                </style></head><body>${previewSheet.innerHTML}</body></html>`);
            win.document.close();
            win.focus();
            win.print();
        });
    }

    function initThemeToggle() {
        const toggleBtn = document.getElementById("theme-toggle");
        const STORAGE_KEY = "nk_theme_override";

        function getTimeTheme() {
            const hr = new Date().getHours();
            return (hr >= 6 && hr < 19) ? "light" : "dark";
        }

        function getSavedOverride() {
            try {
                const v = localStorage.getItem(STORAGE_KEY);
                return (v === "dark" || v === "light") ? v : null;
            } catch (_) {
                return null;
            }
        }

        function applyTheme(theme, isAuto) {
            document.documentElement.dataset.theme = theme;
            document.documentElement.dataset.themeMode = isAuto ? "auto" : "manual";
            if (!toggleBtn) return;

            const isDark = theme === "dark";
            const iconClass = isDark ? "fas fa-sun" : "fas fa-moon";
            const labelText = isAuto ? "Auto" : (isDark ? "Dark" : "Light");
            toggleBtn.innerHTML = `<i class="${iconClass}" aria-hidden="true"></i><span class="theme-toggle-label">${labelText}</span>`;
            toggleBtn.setAttribute("aria-pressed", isDark ? "true" : "false");
            toggleBtn.title = isAuto
                ? `Auto mode (${isDark ? "Night" : "Day"}: ${isDark ? "Dark" : "Light"}; 6 AM–7 PM light, 7 PM–6 AM dark). Click to override.`
                : `Manual ${labelText} mode. Click to switch; double-click to return to time-based Auto.`;
        }

        const initialSaved = getSavedOverride();
        applyTheme(initialSaved || getTimeTheme(), !initialSaved);

        if (toggleBtn) {
            toggleBtn.addEventListener("click", () => {
                const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
                const next = current === "dark" ? "light" : "dark";
                try { localStorage.setItem(STORAGE_KEY, next); } catch (_) {}
                applyTheme(next, false);
            });

            toggleBtn.addEventListener("dblclick", () => {
                try { localStorage.removeItem(STORAGE_KEY); } catch (_) {}
                applyTheme(getTimeTheme(), true);
            });
        }

        window.setInterval(() => {
            if (!getSavedOverride()) {
                applyTheme(getTimeTheme(), true);
            }
        }, 300000);
    }

    initThemeToggle();
    initHeroLatticeCanvas();
    initHackathonsShowcase();
    initPublications();
    initNewsFeed();
    initResumeStudio();
});
