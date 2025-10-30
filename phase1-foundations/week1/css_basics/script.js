const seeAllButton = document.querySelector('#see-all button');
seeAllButton.addEventListener('click', () => {
    alert('Check out my projects on Github!');

    const currentColor = seeAllButton.style.backgroundColor || '#3498db';
    seeAllButton.style.backgroundColor = currentColor === 'rgb(231, 76, 60)' ? '#3498db' : '#e74c3c';

    const message = document.createElement('p');
    message.textContent = 'Button color changed!';
    message.className = 'temp-message';
    message.setAttribute('aria-live', 'polite');
    document.querySelector('.projects').appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);
});

const projectImages = document.querySelectorAll('.project-img');
projectImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => openImageOverlay(img.src, img.alt));
});


const openImageOverlay = (src, alt = '') => {

    const existingOverlay = document.querySelector('.img-overlay');
    if (existingOverlay) existingOverlay.remove();

    const overlay = document.createElement('div');
    overlay.className = 'img-overlay';
    overlay.tabIndex = 0;
    overlay.setAttribute('aria-label', 'Image preview overlay, press Escape or click to close');

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