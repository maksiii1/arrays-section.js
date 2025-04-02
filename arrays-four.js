const arithMean = (arr) => {
  let result = arr.reduce((accum, currentNum) => {
    return accum + currentNum;
  }, 0);

  return (result / arr.length).toFixed(1);
};

const mainArr = [1, 2, 3, 4, 5];

console.log(arithMean(mainArr));
