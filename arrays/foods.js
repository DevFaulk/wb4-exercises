let dinner = [
  { item: "Steak Fajitas", price: 9.95 },
  { item: "Chips and Guacamole", price: 5.25 },
  { item: "Sweet Tea", price: 2.79 },
];

let price = 0;

dinner.forEach((dinner) => (price += dinner.price));
console.log(price);
