const seeAllButton = document.getElementById('see-all');
seeAllButton.addEventListener('click', () => {
    alert('Check out my projects on Github!');
});

const openImageOverlay = (src, alt = '') => {

    const existingOverlay = document.querySelector('img-overlay');
    if(existingOverlay) existingOverlay.remove();

    const overlay = document.createElement('div');
    overlay.className = 'img-overlay';
    overlay.tabIndex = 0;
    overlay.setAttribute('aria-label', 'Image preview overlay, press Espace or click to close');

    const img = document.createElement('img');
    img.className = 'img-overlay__img';
    img.src = src;
    img.alt = alt;
    img.addEventListener('click', (e) => e.stopPropagation());

    const closeButton = document.createElement('button');
    closeButton.className = 'img-overlay__close';
    closeButton.textContent = 'Close';
    closeButton.setAttribute('aria-label', 'Close image preview');

    overlay.appendChild(img);
    overlay.appendChild(closeButton);

    const close = () => {
        document.body.removeChild(overlay);
        document.removeEventListener('keydown', onkey);
        document.body.style.overflow = '';
    };

    const onkey = (e) => {
        if (e.key === 'Escape') close();
    };

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
    });
    closeButton.addEventListener('click', close);
    document.addEventListener('keydown', onkey);
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
    overlay.focus();
}

const projectImages = document.querySelectorAll('.project-img');
projectImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => openImageOverlay(img.src, img.alt));
});

const header = document.querySelector('header');
header.addEventListener('click', (e) => {
    if (e.target.closest('img')) return;
    header.style.backgroundColor = header.style.backgroundColor === 'rgb(52, 73, 94)' ? '#2c3e50' : '#34495e';
});

const profileImg = document.querySelector('header img');
if (profileImg) {
    profileImg.addEventListener('click', (e) => {
        e.stopPropagation();
        openImageOverlay(profileImg.src, profileImg.alt || '');
    });
}