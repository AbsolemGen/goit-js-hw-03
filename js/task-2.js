function makeArray(firstArray, secondArray, maxLength) {
  const concatArray = firstArray.concat(secondArray);
  return concatArray.slice(0, maxLength);
}
makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
