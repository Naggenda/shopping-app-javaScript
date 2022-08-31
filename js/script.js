let count = 0;
let totalPrice;
let img = document.getElementById("img");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

let navLinks = document.getElementById("nav-links");
let countVl = document.getElementById("count-vl");
let countEl = document.getElementById("count-el");
let myCart = document.getElementById("my-cart");
let itemPrice = document.getElementById("item-price");
let price = 250;

function toggle() {
  if (navLinks.style.display == "none") {
    navLinks.style.display = "block";
  } else {
    navLinks.style.display = "none";
  }
}

function decrement() {
  count = count - 1;
  countVl.innerText = count;
  console.log(countVl);
}

function increment() {
  count += 1;
  countVl.innerText = count;
}

function save() {
  countEl.innerText = count;
  totalPrice = count * price;
  itemPrice.innerText += totalPrice;
}

function cartItem() {
  if (myCart.style.display == "none") {
    myCart.style.display = "block";
  } else {
    myCart.style.display = "none";
  }
}
// image rendering
function myfunction1() {
  img1.style.display = "block";
  img.style.display = "none";
  img2.style.display = "none";
  img3.style.display = "none";
}

function myfunction3() {
  img3.style.display = "block";
  img.style.display = "none";
  img2.style.display = "none";
  img1.style.display = "none";
}

function myfunction2() {
  img2.style.display = "block";
  img.style.display = "none";
  img3.style.display = "none";
  img1.style.display = "none";
}

function myfunction() {
  img.style.display = "block";
  img3.style.display = "none";
  img2.style.display = "none";
  img1.style.display = "none";
}

// media query next and prev buttons
function prevbtn() {
  if (img.style.display == "block") {
    img3.style.display = "block";
    img2.style.display = "none";
    img1.style.display = "none";
    img.style.display = "none";
  } 
  else if (img3.style.display == "block") {
    img2.style.display = "block";
    img3.style.display = "none";
    img1.style.display = "none";
    img.style.display = "none";
  }
  else if (img2.style.display == "block") {
    img1.style.display = "block";
    img3.style.display = "none";
    img2.style.display = "none";
    img.style.display = "none";
  }
  else{
    img.style.display = "block";
    img3.style.display = "none";
    img1.style.display = "none";
    img2.style.display = "none";
  }
}

function nextbtn() {
    if (img.style.display == "block") {
        img1.style.display = "block";
        img2.style.display = "none";
        img3.style.display = "none";
        img.style.display = "none";
      } 
      else if (img1.style.display == "block") {
        img2.style.display = "block";
        img3.style.display = "none";
        img1.style.display = "none";
        img.style.display = "none";
      }
      else if (img2.style.display == "block") {
        img3.style.display = "block";
        img1.style.display = "none";
        img2.style.display = "none";
        img.style.display = "none";
      }
      else{
        img.style.display = "block";
        img3.style.display = "none";
        img1.style.display = "none";
        img2.style.display = "none";
      }
}
