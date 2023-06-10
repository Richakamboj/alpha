import { addToCart }  from "./shoppingCart.js";

console.log('importing module');

addToCart('bread', 5);

const ShoppingCart2 = (function(){
const cart =[];
const shippingCost =10;
const totalPrice = 220;
const totalQuantity = 23;

const addToCart = function (product, qt){
    cart.push({product, qt});
    console.log(`${qt} ${product} added to cart`)
}
const orderStock = function (product, qt){
    cart.push({product, qt});
    console.log(`${qt} ${product} ordered from supplier`)
};

return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
}
})();

ShoppingCart2.addToCart('apple', 4)
ShoppingCart2.addToCart('pizza', 10)
console.log(ShoppingCart2)
ShoppingCart2.cart


const state = {
    cart:[
        {product :'bread', qt:10}
    ],
    user: {loggedIn: true},
}
const balloonContainer = document.getElementById("balloon-container");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove()
  }, 500)
}

window.addEventListener("load", () => {
  createBalloons(30)
});

window.addEventListener("click", () => {
  removeBalloons();
});
