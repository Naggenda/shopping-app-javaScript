let count = 0
let totalPrice;
let navLinks = document.getElementById('nav-links');
let countVl = document.getElementById('count-vl');
let countEl = document.getElementById('count-el');
let myCart = document.getElementById('my-cart');
let itemPrice = document.getElementById('item-price')
let price = 250;

function toggle(){
    if(navLinks.style.display=='none'){
        navLinks.style.display="block";
    }
    else{
        navLinks.style.display="none";
    }
}

function decrement(){
    count = count - 1;
    countVl.innerText = count;
    console.log(countVl);
    
}

function increment(){
    count += 1;
    countVl.innerText = count;
}

function save(){
    countEl.innerText = count;
    totalPrice = count * price;
    itemPrice.innerText += totalPrice;
}

function cartItem(){
    if(myCart.style.display == 'none'){
        myCart.style.display = "block";
    }
    else{
        myCart.style.display = "none";
    }
    
}
// image rendering
function myfunction1(){
    let img = document.getElementById('img');
    // var p = document.getElementById('img1');
    if(img1.style.display=='none'){
        img1.style.display='block';
    }
    else{
        img1.style.display='block';
    }
    
}

function myfunction3(){
    // let img = document.getElementById('img');
    var img3 = document.getElementById('img3');
    if(img3.style.display=='none'){
        img3.style.display='block';
    }
    else{
        img3.style.display='block';
    }
    
}

function myfunction2(){
    // let img = document.getElementById('img');
    let img2 = document.getElementById('img2');
    if(img2.style.display=='none'){
        img2.style.display='block';
    }
    else{
        img2.style.display='block';
    }
    
}

function myfunction(){
    let img = document.getElementById('img');
    // var i = document.getElementById('img1');
    if(img.style.display=='none'){
        img.style.display='block';
    }
    else{
        img.style.display='block';
    }
    
}