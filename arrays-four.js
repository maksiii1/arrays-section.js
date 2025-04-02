const arithMean = (arr) => {
  let result = arr.reduce((accum, index) => {
    return accum + index;
  }, 0);

  return (result / arr.length).toFixed(1);
};

const mainArr = [1, 2, 3, 4, 5];

console.log(arithMean(mainArr));
