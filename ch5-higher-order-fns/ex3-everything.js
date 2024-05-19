// Arrays also have an every method analogous to the some method.
// This method returns true when the given function returns true for every element in the array.
// In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.
// Implement every as a function that takes an array and a predicate function as parameters. 
// Write two versions, one using a loop and one using the some method.

// my version... should have read the instructions. Oh well.
const myEvery = (array, test) => {
    const mapped = array.map(test);
    const anded = mapped.reduce((a, b) => a && b, true);
    return anded;
}

const forEvery = (array, test) => {
    let retval = true;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        retval = retval && test(element);
    }
    return retval;
}

const someEvery = (array, test) => {
    const someFailed = array.some((val) => !test(val));
    return !someFailed;
};

console.log("Map and reduce:");
console.log(myEvery([1, 3, 5], n => n < 10));
// → true
console.log(myEvery([2, 4, 16], n => n < 10));
// → false
console.log(myEvery([], n => n < 10));
// → true

console.log("\nFor loop:");
console.log(forEvery([1, 3, 5], n => n < 10));
// → true
console.log(forEvery([2, 4, 16], n => n < 10));
// → false
console.log(forEvery([], n => n < 10));
// → true

console.log("\nSome demorgan:");
console.log(someEvery([1, 3, 5], n => n < 10));
// → true
console.log(someEvery([2, 4, 16], n => n < 10));
// → false
console.log(someEvery([], n => n < 10));
// → true