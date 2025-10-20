const seeAllButton = document.getElementById('see-all');
seeAllButton.addEventListener('click', () => {
    alert('Check out my projects on Github!');
});

const projectImages = document.querySelectorAll('.project-img');
projectImages.forEach(img => {
    img.addEventListener('click', () => {
        const altText = img.getAttribute('alt');
        alert(`You clicked on: ${altText}`);
    });
});

const header = document.querySelector('header');
header.addEventListener('click', () => {
    header.style.backgroundColor = '#34495e';
});