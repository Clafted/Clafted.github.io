let scrollval = 100.0;
let prevY = 0.0;

window.onscroll = function() {
    var delta = (prevY - window.scrollY) * 0.5;
    scrollval = Math.max(0, Math.min(100, scrollval+delta));
    console.log(delta + "   " + scrollval);
    for (let element of document.getElementById("directory").children) {
        element.style.opacity = scrollval/100.0;
    }
    document.getElementById("directory").style.backgroundColor = "rgba(4, 25, 45, " + scrollval/100.0 + ")";
    prevY = window.scrollY;
}