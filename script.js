let scrollval = 100.0;
let prevY = 0.0;
let id;
let op = 0.0;

function scroll() {
    var delta = (prevY - window.scrollY) * 0.5;
    scrollval = Math.max(0, Math.min(100, scrollval+delta));
    for (let element of document.getElementById("directory").children) {
        element.style.opacity = scrollval/100.0;
    }
    document.getElementById("directory").style.backgroundColor = "rgba(4, 25, 45, " + scrollval/100.0 + ")";
    document.getElementById("directory").style.boxShadow = "0 0 7px rgba(0, 0, 0, " + scrollval/100.0 + ")";
    prevY = window.scrollY;
}

function fadeIn(element) {
    if (element.style.opacity == 1.0) {
        clearInterval(id);
    } else {
        element.style.opacity = Number(element.style.opacity) + 0.01;
    }
    
}

function load() {
    var home = document.getElementById("home");
    home.opacity = 0.0;
    id = setInterval(fadeIn, 10, home);
}

window.onscroll = scroll;
window.onload = load;