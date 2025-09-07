const params = new URLSearchParams(window.location.search);
const imageUrl = decodeURIComponent(params.get("image"));

const para = document.createElement("img");
para.setAttribute("src", imageUrl);
para.setAttribute("id", "pageImage");

var main = document.getElementsByTagName("main")[0];
main.appendChild(para);