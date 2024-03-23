// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing .length after it.

// let abc = "abc";
// console.log(abc.length);
// // → 3

// Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.
const triangleBaseLength = 7;

for (let numHashes = 1; numHashes <= triangleBaseLength; numHashes++) {
    let nextLine = '#';
    // Feels dirty making this O(N^2)...
    while(nextLine.length < numHashes) {
        nextLine += '#';
    }
    console.log(nextLine);
}