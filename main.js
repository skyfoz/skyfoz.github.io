document.getElementById("logo").addEventListener("click", function () {
  location.href = "/dev/";
});

function hatesMobile() {
  const side = document.getElementsByClassName('side')[0];
  const square = document.getElementsByClassName('square')[0];

  if (side && square) {
    const squareBottom = square.getBoundingClientRect().bottom + window.scrollY;
    side.style.top = `${squareBottom + 1}px`;
  }
}

function allMyHommies(query) {
  if (query.matches) {
    document.addEventListener("scroll", hatesMobile);
    hatesMobile();
  } else {
    const side = document.getElementsByClassName('side')[0];
    if (side) {
      side.style.top = "calc(10% - 1px)";
    }
    document.removeEventListener("scroll", hatesMobile);
  }
}

var query = window.matchMedia("screen and (max-width: 780px)");
allMyHommies(query);
query.addEventListener("change", function () {
  allMyHommies(query);
});