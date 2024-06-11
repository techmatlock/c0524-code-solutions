const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

values.forEach((val) => console.log(val));

values.forEach((val, idx, arr) => {
  val = arr[arr.length - 1 - idx];
  console.log(val);
});
