const params = new URLSearchParams(window.location.search);
const imageUrl = decodeURIComponent(params.get("image"));

const para = document.createElement("img");
para.setAttribute("src", imageUrl);
para.setAttribute("id", "pageImage");

var main = document.getElementsByClassName('box')[0];
main.appendChild(para);

var card = document.createElement('div');
card.setAttribute('id', 'image');
card.setAttribute('class', 'card');

var cardContent = document.createElement('div');
cardContent.setAttribute('class', 'letitre');

const fileName = document.createTextNode(imageUrl.split("/").pop().split(".")[0].split("_")[0]);
const year = document.createTextNode(imageUrl.split("/").pop().split(".")[0].split("_")[1]);

var yearElement = document.createElement('div');
yearElement.setAttribute('class', "cardContent");
yearElement.appendChild(year)

cardContent.appendChild(fileName);
cardContent.appendChild(yearElement)
card.appendChild(cardContent);
main.appendChild(card);