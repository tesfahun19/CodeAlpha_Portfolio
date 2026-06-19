// ==========================================================================
// 1. SCROLL SPY (Active Navbar Link on Scroll)
// ==========================================================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

const observerOptions = {
    // Triggers when the section occupies the major part of the viewport
    rootMargin: '-150px 0px -50% 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            navLinks.forEach(link => {
                // Toggles 'active' class based on matching section ID
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// ==========================================================================
// 2. DYNAMIC FOOTER YEAR
// ==========================================================================
const yearElement = document.getElementById('current-year');
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ==========================================================================
// 3. MOBILE HAMBURGER MENU
// ==========================================================================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    // Toggle mobile menu and switch icons cleanly (FA v6)
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-xmark');
    });

    // Close menu when any navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-xmark');
        });
    });
}