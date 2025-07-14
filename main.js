document.getElementById("logo").addEventListener("click", function() {
  location.href = "/dev/";});

document.getElementsByClassName("menu")[0].onclick = function() {btnMenu()}

var btnClicked = false;

function btnMenu() {
  if (btnClicked == false)
  {
    btnClicked = true;
    document.getElementsByClassName("menu")[0].style.backgroundColor = 'rgb(34, 34, 34)';
    document.getElementsByClassName("menu")[0].style.filter = "drop-shadow(0 0 0.2rem rgb(44, 44, 44))";
    document.getElementsByClassName("side")[0].style.left = "0px";
  }
  else
  {
    btnClicked = false;
    document.getElementsByClassName("menu")[0].style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementsByClassName("menu")[0].style.filter = "drop-shadow(0 0 0.2rem rgb(26, 26, 26)";
    document.getElementsByClassName("side")[0].style.left = "110%";
  }
}

function forTestingOrUrWeird(mobileQuery) {
  if (!mobileQuery.matches) {
    document.getElementsByClassName("side")[0].style.transitionDuration = "0s";
    setTimeout(function(){
    document.getElementsByClassName("side")[0].style.display = "block";
    document.getElementsByClassName("menu")[0].style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementsByClassName("menu")[0].style.filter = "drop-shadow(0 0 0.2rem rgb(26, 26, 26)";
    }, 1);
    document.getElementsByClassName("side")[0].style.left = "0px";
  } else {
    document.getElementsByClassName("side")[0].style.left = "110%";
    setTimeout(function(){
    document.getElementsByClassName("side")[0].style.transitionDuration = "0.5s";
    }, 1);
  }
}

var mobileQuery = window.matchMedia("screen and (max-width: 780px)")

forTestingOrUrWeird(mobileQuery);

mobileQuery.addEventListener("change", function() {
  forTestingOrUrWeird(mobileQuery);
});

function countLines() {
   var el = document.getElementById('content');
   var divHeight = el.offsetHeight
   var lineHeight = 22;
   var lines = divHeight / lineHeight;
   var linesDoc = document.getElementById('lines');
   while (linesDoc.firstChild) { 
    linesDoc.firstChild.remove(); 
   }
   for (let i=0; i < lines + 1; i++){
    const div = document.createElement("div");
    div.style.textAlign = "right";
    const node = document.createTextNode(i + 1);
    div.appendChild(node);
    linesDoc.appendChild(div);
   }
}

countLines()

window.addEventListener('resize', function(event) {
    countLines()
}, true);