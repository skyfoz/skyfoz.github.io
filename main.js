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
    document.getElementsByClassName("menu")[0].style.filter = "drop-shadow(0 0 0.2rem rgb(26, 26, 26))";
    document.getElementsByClassName("side")[0].style.left = "110%";
  }
}

function forTestingOrUrWeird(mobileQuery) {
  if (!mobileQuery.matches) {
    document.getElementsByClassName("side")[0].style.transitionDuration = "0s";
    setTimeout(function(){
    document.getElementsByClassName("side")[0].style.display = "block";
    document.getElementsByClassName("menu")[0].style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementsByClassName("menu")[0].style.filter = "drop-shadow(0 0 0.2rem rgb(26, 26, 26))";
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
   var el = document.getElementsByClassName('innerContent')[0];
   var divHeight = el.offsetHeight
   var lineHeight = 22;
   var lines = divHeight / lineHeight;
   var linesDoc = document.getElementById('lines');
   while (linesDoc.firstChild) { 
    linesDoc.firstChild.remove(); 
   }
   for (let i=0; i < lines; i++){
    const div = document.createElement("div");
    div.style.textAlign = "right";
    const node = document.createTextNode(i + 1);
    div.appendChild(node);
    linesDoc.appendChild(div);
   }
}

window.addEventListener('resize', function(event) {
    countLines()
}, true);

document.getElementsByClassName('innerContent')[0].addEventListener('input', function(){
   countLines()
   getCaretPosition();
});

function getCaretPosition() {
  const selection = window.getSelection();
  if (selection.rangeCount === 0) return null;

  const range = selection.getRangeAt(0).cloneRange();
  range.collapse(true);

  const rect = range.getClientRects()[0];
  if (!rect) return;

  const contentRect = document.getElementsByClassName("innerContent")[0].getBoundingClientRect();
  const posLines = Math.floor((rect.top - contentRect.top - 1) / 22);

  const elements = document.getElementById('lines').children;
  for (const child of elements) child.style.color = "#767486";
  if (elements[posLines]) elements[posLines].style.color = "#d1d1d1";

  let outline = document.getElementById("selectedLine");
  if (!outline) {
    outline = document.createElement("div");
    outline.id = "selectedLine";
    document.getElementById('dev').appendChild(outline);
  }

  const contentTop = parseFloat(window.getComputedStyle(document.getElementsByClassName('innerContent')[0]).top) || 0;
  const contentHeight = parseFloat(window.getComputedStyle(document.getElementsByClassName('innerContent')[0]).height) || 0;
  outline.style.top = (contentTop + posLines * 22 - contentHeight) + "px";
}


document.getElementsByClassName('innerContent')[0].addEventListener("click", function(){
  getCaretPosition()
}, true);

document.getElementsByClassName("innerContent")[0].addEventListener('keyup', function() { getCaretPosition();}, true);

window.addEventListener("resize", function() {
  this.document.getElementById('selectedLine').remove();
})

setTimeout(countLines(), 50);