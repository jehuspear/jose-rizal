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
