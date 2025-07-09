document.getElementById("logo").addEventListener("click", function() {
  location.href = "/dev/";});

var query = window.matchMedia("screen and (max-width: 780px)")

function hatesMobile() {
  document.getElementsByClassName('side').style.top = "calc(document.getElementsByClassName('square').bottom + 1px)";
}

function allMyHommies(query) {
  if (query.matches) {
    document.addEventListener(scroll, hatesMobile())
  }
  else
  {
    document.getElementsByClassName('side').style.top = "calc(10% - 1px)";
    document.removeEventListener(scroll, hatesMobile())
  }
}

allMyHommies(query);

query.addEventListener("change", function() {allMyHommies(query)})