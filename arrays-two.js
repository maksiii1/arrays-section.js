const checkEven = (arr) => {
  let arrLength = arr.length;
  for (let index = 0; index < arrLength; index++) {
    if (arr[index] % 2 !== 0) {
      return true;
    }
  }

  return false;
};

const mainArr = [2, 4, 6, 8, 10, 12];
const secArr = [2, 4, 6, 6, 8, 9];

console.log(checkEven(mainArr));
console.log(checkEven(secArr));
