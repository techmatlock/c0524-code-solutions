'use strict';
const prices = [42.42, 10, 28.2234, 3.2, 5, 12];
const newArr = prices.map((price) => {
  return { price, salePrice: price / 2 };
});
console.log(newArr);
const formattedArr = prices.map((price) => {
  return `$${price.toFixed(2)}`;
});
console.log(formattedArr);
