// ITERATION 1

const { product } = require("puppeteer");



function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  //... your code goes here
  // js/index.js
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');
  
  console.log(typeof subtotal);

  console.log('adding an element to the list');

  costs = Number(price) * Number(quantity);
  console.log(costs);
  subtotal.innerText = costs;
  return Number(costs);

}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  //... your code goes here
  
  const allproducts = document.querySelectorAll('.product');
  
  let finalTot = 0;
  allproducts.forEach((element) => {
   const subtotalProduct = updateSubtotal(element);
   finalTot += subtotalProduct;
 });


 // ITERATION 3
  //... your code goes here

 console.log(finalTot);

 let totalSpan = document.querySelector('#total-value span');
 totalSpan.innerText = finalTot;


  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  const removeButtons = product.querySelectorAll('.btn btn-remove');
  const removeButtonsArr = [...removeButtons];
  quantity = product.querySelector('.quantity input').value;

  removeButtonsArr.forEach((ele) => {
   ele.addEventListener('click', (removeProduct) =>{
     quantinty --;  
   })
  });

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
})
