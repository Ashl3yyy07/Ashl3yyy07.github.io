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



//SHOPPING CART

let navicon = document.querySelector('.iconCart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');

navicon.addEventListener('click', ()=>{
    if(cart.style.right == '-100%'){
        cart.style.right = '0';
        container.style.transform = 'translateX(-400px)';
    }else{
        cart.style.right = '-100%' ;
        container.style.transform = 'translateX(0)';

    }

})

.close.addEventListener('click', ()=>{
    cart.style.right = '-100%';
    container.style.transform = 'translateX(0)';

})

let products = null;
//get data from JSON file
fetch('product.json')
.then(response => response.json())
.then(data => {
    products = data;
    addDataToHTML();
})

//show datas in list html
function addDatatoHTML (){
    //remove datas default to html
    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.innerHTML = '';

    //add new datas

    if(products != null){
        products.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            
        })
    }
}