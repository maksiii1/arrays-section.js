const remakeArr = (arr) => {
  let firstIndex = arr[0];
  arr.push(firstIndex);
  arr.shift();

  return arr;
};

const remakeArr2 = (arr) => {
  let lastIndex = arr[arr.length - 1];
  arr.unshift(lastIndex);
  arr.pop();

  return arr;
};

const mainArr = [1, 2, 3, 4, 5];

console.log(remakeArr(mainArr));
console.log(remakeArr2(mainArr));
