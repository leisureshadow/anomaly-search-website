// Language Toggle Functionality
let currentLang = 'en';

function toggleLanguage() {
    const langBtn = document.getElementById('langBtn');
    const enContent = document.querySelectorAll('.en-content');
    const zhContent = document.querySelectorAll('.zh-content');
    const elementsWithLang = document.querySelectorAll('[data-en][data-zh]');

    if (currentLang === 'en') {
        // Switch to Chinese
        currentLang = 'zh';
        langBtn.textContent = 'English';
        
        enContent.forEach(el => el.style.display = 'none');
        zhContent.forEach(el => el.style.display = 'block');
        
        elementsWithLang.forEach(el => {
            el.textContent = el.getAttribute('data-zh');
        });
    } else {
        // Switch to English
        currentLang = 'en';
        langBtn.textContent = '中文';
        
        enContent.forEach(el => el.style.display = 'block');
        zhContent.forEach(el => el.style.display = 'none');
        
        elementsWithLang.forEach(el => {
            el.textContent = el.getAttribute('data-en');
        });
    }
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a, .cta-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for animation
    const sections = document.querySelectorAll('.section, .stat-card, .why-card');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});
