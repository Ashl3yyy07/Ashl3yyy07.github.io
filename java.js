const header = document.querySelector("header");


window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})


//MENU BAR

let menuBar = document.querySelector('#menu-bar');
let menuPage = document.querySelector('#menu-page');
let html = document.querySelector('html');





//Show/hide menu bar

menuBar.addEventListener('click', () => {
    menuPage.classList.toggle('active');

    html.style.overflow = (menuPage.classList.contains('active')) ? "hidden" : "scroll"
} )


function accessCounter(spanElement){
    if (screenType === 'desktop') {
        return document.querySelector('#nav')
    }
}