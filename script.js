// ==== script.js ====

document.addEventListener('DOMContentLoaded', function() {
    // --- Header Scroll Effect ---
    const header = document.getElementById('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) { // Adjust scroll distance as needed
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navbar = document.getElementById('navbar');
    if (mobileMenuToggle && navbar) {
        mobileMenuToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
            // Optional: Change icon on toggle
            const icon = mobileMenuToggle.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Smooth Scrolling for Nav Links & Active Link Highlighting ---
    const navLinks = document.querySelectorAll('#navbar a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let targetId = this.getAttribute('href');
            let targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate offset if header is fixed and not transparent
                let headerOffset = document.getElementById('header').offsetHeight;
                if(header.classList.contains('scrolled') || targetId === '#hero'){
                    // No offset for hero, or if header is transparent (already accounted for by hero's margin-top)
                } else {
                     // this logic might need refinement based on final header behavior
                }

                let elementPosition = targetElement.getBoundingClientRect().top;
                let offsetPosition = elementPosition + window.pageYOffset - (targetId !== '#hero' ? headerOffset : 0);


                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu after click
                if (navbar.classList.contains('active')) {
                    navbar.classList.remove('active');
                    const icon = mobileMenuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // Active link highlighting on scroll (more complex, consider Intersection Observer)
    // For simplicity, this part is omitted but can be added for enhanced UX.
    // A simpler approach would be to highlight on click only.

    // --- Dynamic Year for Footer ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- (Optional) Google Scholar Publications Fetcher ---
    // This function is kept from the previous response, to be used if you set up the JSON file.
    async function loadPublications() {
        const publicationsListEl = document.querySelector('#publications .publications-list');
        const loadingMessageEl = document.getElementById('publications-loading-message');
        // ==== EDITABLE: Update this if your JSON file is named differently or in a different path ====
        const recordFile = 'assets/publications.json'; 

        if (!publicationsListEl || !loadingMessageEl) {
            if (loadingMessageEl) loadingMessageEl.textContent = 'Publication display elements not found.';
            return;
        }

        try {
            // Add a cache-busting query parameter
            const response = await fetch(recordFile + '?t=' + new Date().getTime()); 
            if (!response.ok) {
                // If file not found, hide loading and show a message or let manual entries show.
                if (response.status === 404) {
                     loadingMessageEl.textContent = 'Automated publication list not found. Displaying manual entries if any.';
                     // Or hide it: loadingMessageEl.style.display = 'none';
                     return; // Exit if file not found, allowing manual entries to persist
                }
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const publications = await response.json();

            if (publications && publications.length > 0) {
                publicationsListEl.innerHTML = ''; // Clear any manual entries or previous loading message
                publications.forEach(pub => {
                    const listItem = document.createElement('li');
                    
                    let authors = pub.authors ? pub.authors.join(', ') : 'Authors not available';
                    // ==== EDITABLE: Update "Komalla" if your name appears differently in Scholar data ====
                    authors = authors.replace(/Komalla,?\s?[A-Z]?\.?/gi, '<strong>$&</strong>');

                    const title = pub.title || 'Title not available';
                    const journal = pub.journal || '';
                    const year = pub.date && pub.date.length > 0 ? pub.date[0] : (pub.year || 'Year not available');
                    const link = pub.link || '#';

                    listItem.innerHTML = `
                        ${authors}. "${title}." 
                        ${journal ? `<em>${journal}</em>. ` : ''}
                        ${year}.
                        ${pub.link && pub.link !== '#' ? `<a href="${link}" target="_blank" rel="noopener noreferrer" class="pub-link">[Link]</a>` : ''}
                        ${pub.citations ? ` (Cited by ${pub.citations})` : ''}
                    `;
                    publicationsListEl.appendChild(listItem);
                });
                loadingMessageEl.style.display = 'none';
            } else if (publicationsListEl.children.length === 0) { // Only show if no manual entries either
                loadingMessageEl.textContent = 'No publications found or unable to load automatically.';
            } else {
                loadingMessageEl.style.display = 'none'; // Hide if there are manual entries
            }
        } catch (error) {
            console.error('Error fetching or parsing publications:', error);
            if (publicationsListEl.children.length === 0) {
                 loadingMessageEl.textContent = 'Could not load publications. Please display manually or check setup.';
                 loadingMessageEl.style.color = 'red';
            } else {
                loadingMessageEl.style.display = 'none'; // Hide if there are manual entries
            }
        }
    }

    // Call it if you are using the automated publications feature
    // If you're only doing manual entries, you can comment out or remove the next line:
    loadPublications();

});
