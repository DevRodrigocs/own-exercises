const select = document.getElementById('fruit');
const result = document.getElementById('result');

select.addEventListener('change', () => {
    const choice = select.value;
    if(choice) {
        result.textContent = `You chose: ${choice}`;
    } else {
        result.textContent = '';
    }
});