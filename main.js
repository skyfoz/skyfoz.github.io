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
    document.getElementsByClassName("side")[0].style.display = "block";
  }
  else
  {
    btnClicked = false;
    document.getElementsByClassName("menu")[0].style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementsByClassName("menu")[0].style.filter = "drop-shadow(0 0 0.2rem rgb(26, 26, 26)";
    document.getElementsByClassName("side")[0].style.display = "none";
  }
}

function forTestingOrUrWeird(mobileQuery) {
  if (!mobileQuery.matches) {
    document.getElementsByClassName("side")[0].style.display = "block";
    document.getElementsByClassName("menu")[0].style.backgroundColor = 'rgb(26, 26, 26)';
    document.getElementsByClassName("menu")[0].style.filter = "drop-shadow(0 0 0.2rem rgb(26, 26, 26)";
  } else {
    document.getElementsByClassName("side")[0].style.display = "none";
  }
}

var mobileQuery = window.matchMedia("screen and (max-width: 780px)")

forTestingOrUrWeird(mobileQuery);

mobileQuery.addEventListener("change", function() {
  forTestingOrUrWeird(mobileQuery);
});