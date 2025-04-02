const multiple = (arr) => {
  const newArr = arr.filter((index) => {
    if (index % 5 === 0) {
      return index;
    }
  });

  return newArr;
};

const mainArr = [1, 2, 5, 12, 15, 21];

console.log(multiple(mainArr));
