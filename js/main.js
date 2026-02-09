// Main Website Functionality
class PersonalWebsite {
    constructor() {
        this.init();
    }
    
    init() {
        this.createStars();
        this.setupNavigation();
        this.setupPersonalSidebar();
        this.setupAnimationObserver();
        this.loadContent();
        this.setupParallaxEffects();
    }
    
    // Generate animated stars background
    createStars() {
        const starContainer = document.querySelector('.stars');
        const starCount = 150;
        
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            // Only make 20% of stars moving for subtle effect
            if (Math.random() < 0.2) {
                star.classList.add('moving');
            }
            
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.width = Math.random() * 3 + 1 + 'px';
            star.style.height = star.style.width;
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (Math.random() * 3 + 2) + 's';
            starContainer.appendChild(star);
        }
    }
    
    // Setup navigation functionality
    setupNavigation() {
        const navbar = document.getElementById('navbar');
        const footer = document.querySelector('footer');
        const navToggle = document.getElementById('navToggle');

        // Navbar scroll effect (background + shadow)
        window.addEventListener('scroll', () => {
            if (!navbar) return;
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for navigation links (only for same-page anchors)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }

                // Close mobile menu after clicking a link
                document.body.classList.remove('nav-open');
            });
        });

        // Mobile nav toggle (three-dots button)
        if (navToggle) {
            navToggle.addEventListener('click', () => {
                document.body.classList.toggle('nav-open');
            });
        }

        // Auto-hide navbar and footer on desktop, show when mouse nears edges
        if (window.innerWidth > 768 && navbar) {
            // Show everything on initial load, then hide after a short delay
            setTimeout(() => {
                navbar.classList.add('hidden-edge');
                if (footer) {
                    footer.classList.add('hidden-edge');
                }
            }, 3000);

            window.addEventListener('mousemove', (e) => {
                const y = e.clientY;
                const viewportHeight = window.innerHeight;

                // Top edge: reveal navbar
                if (y < 80) {
                    navbar.classList.remove('hidden-edge');
                } else if (window.scrollY > 50) {
                    navbar.classList.add('hidden-edge');
                }

                // Bottom edge: reveal footer
                if (footer) {
                    if (viewportHeight - y < 80) {
                        footer.classList.remove('hidden-edge');
                    } else {
                        footer.classList.add('hidden-edge');
                    }
                }
            });
        }
    }
    
    // Setup personal sidebar functionality (legacy - now redirects to personal page)
    setupPersonalSidebar() {
        const toggle = document.querySelector('.personal-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => {
                window.location.href = 'personal.html';
            });
        }
        
        const sidebar = document.getElementById('personalSidebar');
        const closeBtn = document.querySelector('.close-sidebar');
        if (closeBtn && sidebar) {
            closeBtn.addEventListener('click', () => {
                sidebar.classList.remove('active');
            });
        }
    }
    
    // Setup intersection observer for animations
    setupAnimationObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    
                    // Add special effects for different elements
                    if (entry.target.classList.contains('research-card')) {
                        entry.target.style.transition = 'all 0.6s ease';
                    }
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.research-card, .skill-card, .photo-item, .publication-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(50px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }
    
    // Load dynamic content
    loadContent() {
        this.loadResearch();
        this.loadPublications();
        this.loadPhotos();
    }
    
    // Load research content
    loadResearch() {
        const container = document.getElementById('researchGrid');
        if (container && window.researchData) {
            container.innerHTML = window.researchData.map(item => `
                <div class="research-card">
                    <h3>${item.icon} ${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `).join('');
        }
    }
    
    // Load publications
    loadPublications() {
        const container = document.getElementById('publicationsList');

        // Update stats if available
        const metrics = window.researchMetrics || null;
        const pubStatEl = document.getElementById('statPublications');
        const citStatEl = document.getElementById('statCitations');
        const hoursStatEl = document.getElementById('statHours');

        if (metrics) {
            if (pubStatEl) pubStatEl.textContent =
                metrics.totalPublications != null ? metrics.totalPublications : '—';
            if (citStatEl) citStatEl.textContent =
                metrics.totalCitations != null ? metrics.totalCitations : '—';
            if (hoursStatEl) hoursStatEl.textContent =
                metrics.observingHours != null ? metrics.observingHours : '—';
        }

        // Render publications list
        if (container && window.publicationsData && window.publicationsData.length) {
            container.innerHTML = window.publicationsData.map(pub => {
                const journalHtml = pub.link
                    ? `<a href="${pub.link}" target="_blank" rel="noopener noreferrer">${pub.journal}</a>`
                    : pub.journal;

                return `
                <div class="publication-item">
                    <div class="publication-title">${pub.title}</div>
                    <div class="publication-authors">${pub.authors}</div>
                    <div class="publication-journal">${journalHtml}</div>
                </div>`;
            }).join('');
        }
    }
    
    // Load astrophotography images dynamically
    async loadPhotos() {
        const container = document.getElementById('photoGrid');
        
        if (container) {
            // List of placeholder images with cosmic themes (reduced from 6 to 3)
            const placeholderPhotos = [
                { name: '🌌 Deep Sky Wonders', desc: 'Galaxies and nebulae' },
                { name: '🌙 Lunar Chronicles', desc: 'Moon phases and features' },  
                { name: '⭐ Star Trail Magic', desc: 'Earth rotation captured' }
            ];
            
            // Show fewer placeholders as requested
            container.innerHTML = placeholderPhotos.map(photo => `
                <div class="photo-item">
                    <div class="photo-placeholder">${photo.name}</div>
                </div>
            `).join('');
        }
    }

    // Setup parallax effects
    setupParallaxEffects() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            // Parallax for sections
            const parallaxElements = document.querySelectorAll('.section');
            parallaxElements.forEach(el => {
                const speed = 0.05;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
            
            // Add glow effect on scroll
            const sections = document.querySelectorAll('.section');
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    section.style.boxShadow = '0 0 50px rgba(255, 215, 0, 0.1)';
                } else {
                    section.style.boxShadow = 'none';
                }
            });
        });
    }
    
    // Loading animation for page
    showLoadingAnimation() {
        const loader = document.createElement('div');
        loader.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--cosmic-black);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                transition: opacity 0.5s ease;
            ">
                <div style="
                    text-align: center;
                    color: var(--cosmic-gold);
                    font-size: 1.5rem;
                ">
                    <div style="
                        width: 60px;
                        height: 60px;
                        border: 3px solid transparent;
                        border-top: 3px solid var(--cosmic-gold);
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                        margin: 0 auto 20px auto;
                    "></div>
                    Initializing Cosmic Interface...
                </div>
            </div>
            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `;
        
        document.body.appendChild(loader);
        
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(loader);
            }, 500);
        }, 2000);
    }
}

// Terminal-style console greeting
console.log(`
╭─────────────────────────────────────────────╮
│  🌌 Welcome to Yash Bhusare's Cosmic Lab   │
│                                             │
│  📡 Radio Astronomer & FRB Hunter          │
│  🔬 NCRA-TIFR Research Scholar             │
│  ⭐ Exploring the Universe, One Signal      │
│                                             │
│  Built with ❤️ and cosmic curiosity       │
╰─────────────────────────────────────────────╯

🚀 Interactive Features:
• Star cursor with gravity effects
• Particle system interactions  
• Multi-page navigation
• Responsive cosmic design

🐛 Debug Commands:
• GravityCursor.debugCursor() - Fix cursor issues
• Type 'help' for more commands

📧 Found a bug? Contact: yash@ncra.tifr.res.in
`);

// Initialize website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const website = new PersonalWebsite();
    
    // Show loading animation
    website.showLoadingAnimation();
    
    // Add some Easter eggs
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                // Easter egg: Make particles dance
                const particles = document.querySelectorAll('.particle');
                particles.forEach(particle => {
                    particle.style.animation = 'spin 2s linear infinite';
                    particle.style.background = 'var(--plasma-pink)';
                });
                
                setTimeout(() => {
                    particles.forEach(particle => {
                        particle.style.animation = '';
                        particle.style.background = 'var(--aurora-green)';
                    });
                }, 4000);
                
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
});

// Astrophotography Gallery Functions
function toggleGallery() {
    const hiddenGallery = document.getElementById('hiddenGallery');
    const toggleButton = document.getElementById('galleryToggle');
    
    if (hiddenGallery.classList.contains('show')) {
        hiddenGallery.classList.remove('show');
        setTimeout(() => {
            hiddenGallery.style.display = 'none';
        }, 500);
        toggleButton.innerHTML = 'Show More Photos →';
    } else {
        hiddenGallery.style.display = 'grid';
        setTimeout(() => {
            hiddenGallery.classList.add('show');
        }, 10);
        toggleButton.innerHTML = 'Hide Photos ↑';
        
        // Smooth scroll to hidden gallery
        setTimeout(() => {
            hiddenGallery.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 300);
    }
}