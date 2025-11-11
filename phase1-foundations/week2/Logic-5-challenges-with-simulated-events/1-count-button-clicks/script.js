let count = 0;

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    count++;
    console.log(`Click: ${count}`);
});