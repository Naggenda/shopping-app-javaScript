let count = 0
let totalPrice;
let countVl = document.getElementById('count-vl');
let countEl = document.getElementById('count-el');
let myCart = document.getElementById('my-cart');
// let price = parseInt(document.getElementById('price').value);
let itemPrice = document.getElementById('item-price')
let price = 250;

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
function myfunction1(){
    var p = document.getElementById('img1');
    
}

