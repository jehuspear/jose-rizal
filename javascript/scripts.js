// Image Modal Handler
document.addEventListener('DOMContentLoaded', function() {
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const imageSrc = button.getAttribute('data-image');
            const imageCaption = button.getAttribute('data-caption');
            
            const modalImage = this.querySelector('.modal-image');
            const modalCaption = this.querySelector('.modal-caption');
            
            modalImage.src = imageSrc;
            modalImage.alt = imageCaption;
            modalCaption.textContent = imageCaption;
        });
    }
});

// Navbar Scroll Effect
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-section');
    
    function updateNavbar() {
        if (heroSection) {
            const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
            const scrollPosition = window.scrollY + navbar.offsetHeight;
            
            if (scrollPosition < heroBottom) {
                navbar.classList.add('transparent');
            } else {
                navbar.classList.remove('transparent');
            }
        }
    }
    
    // Initial check
    updateNavbar();
    
    // Update on scroll
    window.addEventListener('scroll', updateNavbar);
    
    // Update on window resize
    window.addEventListener('resize', updateNavbar);
});
