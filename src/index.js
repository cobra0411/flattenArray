const flatten = (arr) => {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc.concat(flatten(curr));
    } else {
      return acc.concat(curr);
    }
  }, []);
};

console.log(flatten([1, 2, [3, 4, [5, 6], [7, 8]]]));
console.log(flatten([1, 2, 3, [6, 5, 4]]));
