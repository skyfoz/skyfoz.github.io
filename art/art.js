var btnGauche = document.getElementById("btnGauche");
var btnDroite = document.getElementById("btnDroite");
var scrollableContent = document.getElementsByClassName('mainRoll')[0];
var scrollNumber = 0;
var canTransition = true;
const cssObj = window.getComputedStyle(scrollableContent.getElementsByClassName('rollElement')[0], null);
var lenghtToScroll = parseInt(cssObj.getPropertyValue("width"), 10);

function scrollRight() {
    if (scrollNumber < 2 && canTransition) {
        canTransition = false;
        scrollableContent.scroll({
            top: 0,
            left: scrollableContent.scrollLeft + lenghtToScroll,
            behavior: "smooth",
        });
        scrollNumber += 1;

        setTimeout(() => canTransition = true, 500);
    }
}

function scrollLeft() {
    if (scrollNumber > 0 && canTransition) {
        canTransition = false;
        scrollableContent.scroll({
            top: 0,
            left: scrollableContent.scrollLeft - lenghtToScroll,
            behavior: "smooth",
        });
        scrollNumber -= 1;

        setTimeout(() => canTransition = true, 500);
    }
}

function startTransition()
{
    canTransition = false;
}

function showToolTip()
{
    var tooltip = document.getElementsByClassName("tooltip")[0];
    tooltip.style.visibility = "visible";

    navigator.clipboard.writeText("skyfoz");

    setTimeout(() => {tooltip.style.visibility = "hidden";}, 2000);
}

scrollableContent.addEventListener("transitionstart", startTransition)

btnDroite.onclick = function() {scrollLeft()};
btnGauche.onclick = function() {scrollRight()};

var discord = document.getElementById("discord");
discord.addEventListener("click", showToolTip)

var mainGallery = document.getElementsByClassName("gallery")[0];
var sideGallery = document.getElementsByClassName("gallery")[1];

for (img of mainGallery.children)
{
    var sub = img.children[0].src;
    var query = new URLSearchParams({
        image: sub
    })
    img.setAttribute('onclick', 'location.href = "./image"');
}

for (img of sideGallery.children)
{
    var sub = img.children[0].src;
    var query = new URLSearchParams({
        image: sub
    })
    const queryString = query.toString();

    img.addEventListener('click', ()=> {
        window.location.href = "https://skyfoz.github.io/art/image?" + queryString;
    })
}