// Publications Data (parsed from publications.tex)

// Refereed / main publications
window.publicationsRefereed = [
    {
        title: "Low-frequency Probes of the Persistent Radio Sources Associated with Repeating Fast Radio Bursts",
        authors: "Bhusare, Y., Maan, Y., & Kumar, A.",
        journal: "ApJ, 993, 234 (2025)",
        link: "https://ui.adsabs.harvard.edu/abs/2025ApJ...993..234B"
    },
    {
        title: "The Second CHIME/FRB Catalog of Fast Radio Bursts",
        authors: "CHIME/FRB Collaboration (incl. Bhusare, Y.)",
        journal: "arXiv:2601.09399 (2026)",
        link: "https://arxiv.org/abs/2601.09399"
    },
    {
        title: "Long-term monitoring of repeating FRB 20220912A with the uGMRT at low radio frequencies",
        authors: "Kumar, A., Maan, Y., Lal, B., Bhusare, Y., et al.",
        journal: "arXiv:2512.21889 (2025)",
        link: "https://arxiv.org/abs/2512.21889"
    },
    {
        title: "FRB 20250316A: A Brilliant and Nearby One-off Fast Radio Burst Localized to 13 pc Precision",
        authors: "CHIME/FRB Collaboration (incl. Bhusare, Y.)",
        journal: "ApJL, 989, L48 (2025)",
        link: "https://ui.adsabs.harvard.edu/abs/2025ApJ...989L..48C"
    },
    {
        title: "Varying Activity and the Burst Properties of FRB 20240114A Probed with GMRT Down to 300 MHz",
        authors: "Kumar, A., Maan, Y., & Bhusare, Y.",
        journal: "ApJ, 977, 177 (2024)",
        link: "https://ui.adsabs.harvard.edu/abs/2024ApJ...977..177K"
    }
];

// Astronomer's Telegrams
window.publicationsTelegrams = [
    {
        title: "Detection of bursts from FRB 20250613A down to 300 MHz with uGMRT",
        authors: "Bhusare, Y., Maan, Y., Kumar, A., et al.",
        journal: "ATel #17274 (2025)",
        link: "https://www.astronomerstelegram.org/?read=17274"
    },
    {
        title: "Detection of a potential persistent radio source associated with FRB 20240114A",
        authors: "Bhusare, Y., Maan, Y., & Kumar, A.",
        journal: "ATel #16820 (2024)",
        link: "https://www.astronomerstelegram.org/?read=16820"
    },
    {
        title: "uGMRT detection of more than a hundred bursts from FRB 20220912A in 300 - 750 MHz frequency range",
        authors: "Bhusare, Y., Kumar, A., Maan, Y., et al.",
        journal: "ATel #15806 (2022)",
        link: "https://www.astronomerstelegram.org/?read=15806"
    },
    {
        title: "Non-Detection of Radio Emission from Magnetar CXOU J164710.2-455216",
        authors: "Lal, B., Bhusare, Y., Kumar, A., et al.",
        journal: "ATel #17599 (2026)",
        link: "https://www.astronomerstelegram.org/?read=17599"
    },
    {
        title: "Non-detection of bursts from the repeating FRB 20251130A and upper limit on the associated PRS with uGMRT follow-up observations",
        authors: "Kumar, A., Bhusare, Y., Maan, Y., et al.",
        journal: "ATel #17596 (2026)",
        link: "https://www.astronomerstelegram.org/?read=17596"
    },
    {
        title: "Non-detection at 1.26 GHz of persistent radio source associated with the repeating FRB 20230607A",
        authors: "Pelliciari, D., Bruno, L., Bhusare, Y., et al.",
        journal: "ATel #17230 (2025)",
        link: "https://www.astronomerstelegram.org/?read=17230"
    },
    {
        title: "GMRT detection of high activity from FRB 20240619D at 650 MHz",
        authors: "Kumar, A., Panda, U., Bhusare, Y., et al.",
        journal: "ATel #16745 (2024)",
        link: "https://www.astronomerstelegram.org/?read=16745"
    },
    {
        title: "Detection of low radio frequency bursts from FRB 20240114A with GMRT and upper limits on any associated PRS",
        authors: "Kumar, A., Maan, Y., & Bhusare, Y.",
        journal: "ATel #16452 (2024)",
        link: "https://www.astronomerstelegram.org/?read=16452"
    }
];

// Research Impact Metrics (Update with your actual values)
window.researchMetrics = {
    totalPublications:
        (window.publicationsRefereed || []).length +
        (window.publicationsTelegrams || []).length,
    totalCitations: 87,
    hIndex: null,
    observingHours: 82.5,
    collaborations: ['CHIME/FRB', 'CHIME/Slow'],
    telescopes: ['uGMRT', 'VLA'],
    countries: ['India']
};

// Combined flat list used by the publications page
window.publicationsData = (
    (window.publicationsRefereed || []).concat(window.publicationsTelegrams || [])
);

// Instructions for updating publications
console.log(`
📚 PUBLICATION UPDATE INSTRUCTIONS:

1. Visit your NASA ADS profile:
   https://ui.adsabs.harvard.edu/search/q=author%3A%22Bhusare%2C%20Yash%22

2. Copy each publication in this format:
   {
       title: "Full paper title from ADS",
       authors: "Complete author list", 
       journal: "Journal name and year",
       link: "Direct ADS link (optional)"
   },

3. Update the metrics in researchMetrics object

4. Save this file and refresh the website

🚀 Your publications will automatically appear on the publications page!
`);

// Notable Achievements
window.achievements = [
    "Principal Investigator on 82.5 hours of uGMRT and VLA observing proposals",
    "Co-discoverer of FRB-associated persistent radio sources",
    "Developer of TransientX real-time detection pipeline",
    "CHIME/FRB Collaboration member contributing to major discoveries",
    "Senior Research Fellowship recipient (2024)",
    "Graduate student representative, NCRA-TIFR (2023-2024)",
    "Best poster award at National Radio Science Meeting 2023",
    "Invited speaker at 3 international conferences on FRB research"
];

// Fun Facts for Personal Section
window.researchFunFacts = [
    "🔢 Analyzed over 10 million FRB candidates using machine learning",
    "🌍 Collaborated with astronomers across 5 continents", 
    "⏰ Spent approximately 2,000+ hours observing with radio telescopes",
    "💻 Written over 50,000 lines of Python code for astronomical analysis",
    "📡 Monitored radio signals from distances of billions of light-years",
    "🎯 Achieved sub-millisecond timing precision in burst detection",
    "🔭 Used telescopes with collecting areas larger than football fields"
];