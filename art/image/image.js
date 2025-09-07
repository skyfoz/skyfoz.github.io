const params = new URLSearchParams(window.location.search);
const imageUrl = decodeURIComponent(params.get("image"));

const para = document.createElement("img");
para.setAttribute("src", imageUrl);
para.setAttribute("id", "pageImage");

var main = document.getElementsByClassName('container')[0];
main.appendChild(para);

var card = document.createElement('div');
card.setAttribute('class', 'card');

var cardContent = document.createElement('div');
cardContent('class', 'cardContent');

const fileName = document.createTextNode(imageUrl.split("/").pop().split(".")[0]);
cardContent.appendChild(fileName);
card.appendChild(cardContent);
main.appendChild(card);