import './style.css';

const input = document.querySelector('[id=book-name]');
console.log(input);
let inputedText;
input.addEventListener('change', (e) => {
  inputedText = e.target.value;
});


var requestURL = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=${inputedText}`;
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  var response = request.response;
  console.log(response);
};
