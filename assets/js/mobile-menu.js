/**
 * Mobile Menu Toggle
 * Handles hamburger menu functionality for mobile navigation
 */

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburgerMenu && navLinks) {
        // Toggle menu on hamburger click
        hamburgerMenu.addEventListener('click', function() {
            hamburgerMenu.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when a link is clicked
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(function(link) {
            link.addEventListener('click', function() {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navLinks.contains(event.target);
            const isClickOnHamburger = hamburgerMenu.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active')) {
                hamburgerMenu.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    }
});
