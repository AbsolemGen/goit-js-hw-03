function filterArray(numbers, value) {
  let biggest = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      biggest.push(numbers[i]);
    }
  }
  return biggest;
}
filterArray([1, 2, 3, 4, 5], 3); // [4, 5]
filterArray([1, 2, 3, 4, 5], 4); // [5]
filterArray([1, 2, 3, 4, 5], 5); // []
filterArray([12, 24, 8, 41, 76], 38); // [41, 76]
filterArray([12, 24, 8, 41, 76], 20); // [24, 41, 76]
