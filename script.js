let scrollval = 100.0;
let prevY = 0.0;
let id;
let op = 0.0;
let highlightProject = null;

function scroll() {

    // Directory animations
    var delta = (prevY - window.scrollY) * 0.5;
    scrollval = Math.max(0, Math.min(100, scrollval+delta));
    for (let element of document.querySelector("#directory").children) {
        element.style.opacity = scrollval/100.0;
    }

    document.querySelector("#directory").style.opacity = scrollval/100.0;
    document.querySelector("#directory").style.boxShadow.opacity = scrollval/100.0;
    prevY = window.scrollY;

    // Timeline animations
    var rect;
    var targetYear;
    var offset = window.innerHeight*0.25;
    const projects = document.getElementsByClassName("project");
    for (let p of projects) {
        rect = p.getBoundingClientRect();
        if (highlightProject != p && offset >= rect.y && rect.y >= -1*(rect.height-offset)) {
            highlightProject.style.backgroundColor = "rgba(100,100,100,0)";
            highlightProject = p;
            highlightProject.style.backgroundColor = "rgba(100, 100, 100, 0.5)";
            targetYear = p.className;
        }
    }
    for (let yearDiv of document.getElementById("timeline").children) {
       if (yearDiv.className == targetYear) {
            yearDiv.children[0].style.fontSize = "30px";
       } else {
            yearDiv.children[0].style.fontSize = "20px";
       }
    }
}

function fadeIn(element) {
    if (element.style.opacity == 1.0) {
        clearInterval(id);
    } else {
        element.style.opacity = Number(element.style.opacity) + 0.01;
    }
    
}

function s(e) {
    console.log(e.currentTarget.getBoundingClientRect().y);
}

function load() {
    const main = document.querySelector(".main");
    main.style.opacity = 0.0;
    id = setInterval(fadeIn, 10, main);

    highlightProject = document.getElementsByClassName("project")[0];
    highlightProject.style.backgroundColor = "rgba(100, 100, 100, 0.5)";
}

window.onscroll = scroll;
window.onload = load;