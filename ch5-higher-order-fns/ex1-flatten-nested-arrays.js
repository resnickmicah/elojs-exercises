// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];
let expected = [1, 2, 3, 4, 5, 6];

const flatten = (deep) => {
    return deep.reduce((a, b) => a.concat(b), []);
};

let flattened = flatten(arrays);

console.log(`Flattened:  ${flattened}`);
console.log(`Expected: ${expected}`);