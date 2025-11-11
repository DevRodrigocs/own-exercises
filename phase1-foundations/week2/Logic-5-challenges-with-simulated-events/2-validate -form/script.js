const form = document.getElementById('form');
const inputName = document.getElementById('name');

form.addEventListener('submit', (e) => {
    const name = inputName.value.trim();

    if(name.length < 3) {
        e.preventDefault();
        alert('The name must have at least 3 letters!');
    } else {
        alert('Form submitted successfully!');
    }
});