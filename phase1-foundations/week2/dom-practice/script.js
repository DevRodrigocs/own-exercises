const title = document.getElementById('title');
const paragraph = document.querySelector('.text');
const btnText = document.getElementById('btn-change');
const btncolor =document.getElementById('btn-color');
const list = document.getElementById('list');


btnText.addEventListener('click', () => {
    title.textContent = "Title Changed!";
    paragraph.innerHTML = "<strong>Modified</strong> paragraph with innerHTML!";
});

btncolor.addEventListener('click', () => {
    title.classList.toggle('Red');
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === 'lightblue' ? '#fff' : 'lightblue';
});

setTimeout(() => {
    const newItem = document.createElement('li');
    newItem.textContent = 'Item Added!';
    list.appendChild(newItem);
}, 3000);