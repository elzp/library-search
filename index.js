import './style.css';

const API_URL =
  'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=harry%20potter';

var requestURL =
  'https://cors-anywhere.herokuapp.com/https://www.goodreads.com/book/auto_complete?format=json&q=riordan';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
  var response = request.response;
  console.log(response);
};
