var btnGauche = document.getElementById("btnGauche");
var btnDroite = document.getElementById("btnDroite");
var scrollableContent = document.getElementsByClassName('mainRoll')[0];
var scrollNumber = 0;
var canTransition = true;
const cssObj = window.getComputedStyle(scrollableContent.getElementsByClassName('rollElement')[0], null);
var lenghtToScroll = cssObj.getPropertyValue("width");
lenghtToScroll = lenghtToScroll.slice(0, -2);

function scrollRight() {
    if (scrollNumber < 2 && canTransition) {
        scrollableContent.scroll({
        top: 0,
        left: scrollableContent.scrollLeft + lenghtToScroll - 16,
        behavior: "smooth",
        });
        scrollNumber += 1;
    }
}

function scrollLeft() {
    if (scrollNumber > 0 && canTransition) {
        scrollableContent.scroll({
        top: 0,
        left: scrollableContent.scrollLeft - lenghtToScroll + 16,
        behavior: "smooth",
        });
        scrollNumber -= 1;
    }
}

function endTransition()
{
    canTransition = true;
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

scrollableContent.addEventListener("transitionend", endTransition)
scrollableContent.addEventListener("transitionstart", startTransition)

btnDroite.onclick = function() {scrollLeft()};
btnGauche.onclick = function() {scrollRight()};

var discord = document.getElementById("discord");
discord.addEventListener("click", showToolTip)
