let products = [
  { product: "Gummy Worms", price: 5.79 },
  { product: "Plain M&Ms", price: 2.89 },
  { product: "Peanut M&Ms", price: 2.89 },
  { product: "Swedish Fish", price: 3.79 },
  { product: "Gumdrops", price: 5.79 },
  { product: "Gummy Sharks", price: 3.79 },
  { product: "Sour Patch Kids", price: 5.79 },
  { product: "Hersheys", price: 3.79 },
  { product: "Skittles", price: 2.59 },
  { product: "Three Musketeers", price: 2.49 },
];

function getProductCheaperThan4Bucks() {
  let cheapCandy = [];

  for (const prodDex of products) {
    if (prodDex.price < 4.0) {
      cheapCandy.push(prodDex.product);
    }
  }
  return cheapCandy;
}
// console.log(getProductCheaperThan4Bucks());

function findTitleForCandyPebbles(products, candyName) {
  let chocolatePebbles = [];

  for (const prodDex of products) {
    if (prodDex.product.includes(candyName)) {
      chocolatePebbles.push(prodDex.product);
    }
  }
  return chocolatePebbles;
}
console.log(findTitleForCandyPebbles(products, "M&Ms"));

// function findSwedishFish(candyName) {
//   for (const prodDex of products) {
//     if (prodDex.product == candyName) {
//       return candyName;
//     }
//   }
// }
// console.log(findSwedishFish("Swedish Fish"));
