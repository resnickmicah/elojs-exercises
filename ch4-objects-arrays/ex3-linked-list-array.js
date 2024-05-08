// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
// Also write a listToArray function that produces an array from a list.
// Add the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, 
// and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.
// If you haven’t already, also write a recursive version of nth.

let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};

// I am LE DUMB
// const arrayToList = (arr) => {
//     let currentNode = null;
//     let firstNode = currentNode;

//     for (let i = arr.length; i < arr.length; i++) {
//         if (firstNode === null) {
//             currentNode = { value: arr[i], rest: null };
//             firstNode = currentNode;
//             //  console.log(`Added value ${currentNode.value} to first node`);
//         } else {
//             currentNode.rest = { value: arr[i], rest: null };
//             currentNode = currentNode.rest;
//             // console.log(`Appended node with value ${currentNode.value}`);
//         }
//     }
//     return firstNode;
// };

const prepend = (value, rest) => ({ value, rest });

const arrayToList = (arr) => {
    let currentNode = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        currentNode = prepend(arr[i], currentNode);
    }
    return currentNode;
};

const listToArray = (list) => {
    let retval = [];
    for (let currentNode = list; currentNode != null; currentNode = currentNode.rest) {
        retval.push(currentNode.value);
    }
    return retval;
};

const iterativeNth = (list, index) => listToArray(list)[index];

const nth = (list, numHopsLeft) => {
    if (numHopsLeft < 0) {
        return undefined;
    }
    return numHopsLeft <= 0 ? list?.value : nth(list?.rest, numHopsLeft - 1);
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(arrayToList([]));
// → null

console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

console.log(listToArray(arrayToList([])));
// → []

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}

console.log(iterativeNth(arrayToList([10, 20, 30]), 1));
// → 20

console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

console.log(iterativeNth(arrayToList([10, 20, 30]), -1));
// → undefined

console.log(nth(arrayToList([10, 20, 30]), -1));
// → undefined

console.log(iterativeNth(arrayToList([10, 20, 30]), 3));
// → undefined

console.log(nth(arrayToList([10, 20, 30]), 3));
// → undefined