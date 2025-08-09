// WhatsApp Configuration
const WHATSAPP_NUMBER = "258848261748";
const WHATSAPP_MESSAGE = "Olá peço mais informações!!";

// Open WhatsApp function
function openWhatsApp() {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(whatsappUrl, '_blank');
}

// Smooth scrolling for internal links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links with href="#"
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add animation on scroll for elements
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
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.teacher-item, .tuition-item, .testimonial-item, .reason-item, .promise-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Prevent horizontal scrolling
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
    
    // Handle window resize to maintain proper layout
    window.addEventListener('resize', function() {
        // Ensure no horizontal overflow
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.overflowX = 'hidden';
    });
    
    // Add click tracking for analytics (optional)
    const trackableElements = document.querySelectorAll('.btn-whatsapp, .whatsapp-btn');
    
    trackableElements.forEach(element => {
        element.addEventListener('click', function() {
            // You can add analytics tracking here
            console.log('WhatsApp button clicked');
        });
    });
});

// Loading animation for images
window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            // Handle image loading errors
            this.style.display = 'none';
        });
    });
});

// Mobile-specific optimizations
if (window.innerWidth <= 768) {
    document.addEventListener('DOMContentLoaded', function() {
        // Optimize touch interactions
        const buttons = document.querySelectorAll('.btn, .whatsapp-btn');
        
        buttons.forEach(button => {
            button.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
            });
            
            button.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            });
        });
    });
}

// Utility function to prevent page zoom on mobile
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
});

// Disable double-tap zoom
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Export functions for potential external use
window.CEA = {
    openWhatsApp: openWhatsApp,
    whatsappNumber: WHATSAPP_NUMBER,
    whatsappMessage: WHATSAPP_MESSAGE
};
