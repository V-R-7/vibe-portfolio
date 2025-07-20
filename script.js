// DOM Elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const navBtns = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');
const viewWorkBtn = document.getElementById('view-work-btn');
const contactForm = document.getElementById('contact-form');
const footer = document.getElementById('footer');

// State
let activeSection = 'about';
let isSidebarOpen = false;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeMobileMenu();
    initializeContactForm();
    updateFooterVisibility();
});

// Navigation Functions
function initializeNavigation() {
    // Add click listeners to navigation buttons
    navBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            navigateToSection(section);
        });
    });

    // Add click listener to "View My Work" button
    if (viewWorkBtn) {
        viewWorkBtn.addEventListener('click', function() {
            navigateToSection('projects');
        });
    }
}

function navigateToSection(sectionName) {
    // Update active section
    activeSection = sectionName;
    
    // Update navigation buttons
    navBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-section') === sectionName) {
            btn.classList.add('active');
        }
    });
    
    // Update sections
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === `${sectionName}-section`) {
            section.classList.add('active');
        }
    });
    
    // Close mobile menu if open
    if (isSidebarOpen) {
        closeMobileMenu();
    }
    
    // Update footer visibility
    updateFooterVisibility();
}

// Mobile Menu Functions
function initializeMobileMenu() {
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeMobileMenu);
    }
    
    // Close menu on window resize if screen becomes large
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && isSidebarOpen) {
            closeMobileMenu();
        }
    });
}

function toggleMobileMenu() {
    if (isSidebarOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}

function openMobileMenu() {
    isSidebarOpen = true;
    sidebar.classList.add('open');
    overlay.classList.add('show');
    menuIcon.style.display = 'none';
    closeIcon.style.display = 'block';
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    isSidebarOpen = false;
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    
    // Restore body scroll
    document.body.style.overflow = '';
}

// Contact Form Functions
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmit);
    }
}

function handleContactFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Log form data (in a real app, you'd send this to a server)
    console.log('Form submitted:', data);
    
    // Show success message (you can customize this)
    alert('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form
    contactForm.reset();
}

// Footer Functions
function updateFooterVisibility() {
    if (footer) {
        if (activeSection === 'contact') {
            footer.style.display = 'block';
        } else {
            footer.style.display = 'none';
        }
    }
}

// Smooth scrolling for better UX
function smoothScrollTo(element) {
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add hover effects to certification cards
    const certCards = document.querySelectorAll('.certification-card');
    certCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add focus effects to form inputs
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#9ca3af';
        });
        
        input.addEventListener('blur', function() {
            this.style.borderColor = '#e5e7eb';
        });
    });
});

// Handle keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && isSidebarOpen) {
        closeMobileMenu();
    }
    
    // Arrow keys for section navigation (optional enhancement)
    if (e.altKey) {
        const sectionOrder = ['about', 'projects', 'certifications', 'contact'];
        const currentIndex = sectionOrder.indexOf(activeSection);
        
        if (e.key === 'ArrowRight' && currentIndex < sectionOrder.length - 1) {
            navigateToSection(sectionOrder[currentIndex + 1]);
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            navigateToSection(sectionOrder[currentIndex - 1]);
        }
    }
});

// Add loading animation (optional)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate elements on load
    const animatedElements = document.querySelectorAll('.project-card, .certification-card');
    animatedElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

// Performance optimization: Debounce resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced resize handler
const debouncedResize = debounce(function() {
    if (window.innerWidth > 768 && isSidebarOpen) {
        closeMobileMenu();
    }
}, 250);

window.addEventListener('resize', debouncedResize);