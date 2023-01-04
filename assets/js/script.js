/* Author: 

*/
// hamburger menu added
var menu = document.querySelector("#hamburger-menu");
var navs = document.querySelector("nav");
var bar = document.querySelector(".line");
var nav_list = document.querySelector(".navbar");

menu.addEventListener("click",function(){
    bar.classList.toggle("active");
    navs.classList.toggle("active");
    nav_list.classList.toggle("active");
});

// sticky navbar

var sticky_header = document.querySelector("header");
window.onscroll = function() {
    var event= sticky_header.offsetTop;
    if(window.pageYOffset >= event) {
        sticky_header.classList.add("sticky");
    }     
    else {
        sticky_header.classList.remove("sticky");
    }
}


// scrool to top button
var move_top = document.querySelector(".top-btn");
move_top.addEventListener("click",function() {
    document.documentElement.scrollTop = 0;
});















