const input = document.getElementById('search');
const items = document.querySelectorAll('#list li');

input.addEventListener('input', () => {
    const term = input.value.toLowerCase();

    items.forEach(item => {
        const text = item.textContent.toLocaleLowerCase();
        if(text.includes(term)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});