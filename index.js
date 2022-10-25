import './style.css';

const input = document.querySelector('[id=book-name]');

let inputedText;
input.addEventListener('change', (e) => {
  inputedText = e.target.value;
});
const button = document.querySelector('[id=form__button]');
const resultsContainer = document.querySelector('.results');
resultsContainer.innerHTML='';
let resultOfRequest;

button.addEventListener('click', async (e) => {
  e.preventDefault();
  await request(inputedText);
  resultsContainer.innerHTML='';
  let htmlToInject = resultOfRequest.map(it=>makeBookEl(it)).join('')
  resultsContainer.innerHTML = htmlToInject;
});

function request(textToFind) {
  var requestURL = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=${textToFind}`;
  var request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function () {
    resultOfRequest = request.response.map((it) => {
      return { title: it.title, image: it.imageUrl };
    });
  };
}

function makeBookEl({title,image}){
return`<li class="entry">
<img class="entry__image" src="${image}" alt="Cover">
<p class="entry__name">${title}</p>
</li>`
}
