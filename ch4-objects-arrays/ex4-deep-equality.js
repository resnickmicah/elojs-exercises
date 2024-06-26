// The == operator compares objects by identity, but sometimes you’d prefer to compare the values of their actual properties.
// Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.
// To find out whether values should be compared directly (using the === operator for that) or have their properties compared, you can use the typeof operator.
// If it produces "object" for both values, you should do a deep comparison.
// But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".
//  The Object.keys function will be useful when you need to go over the properties of objects to compare them.

const deepEqual = (first, second) => {
    const firstType = typeof first;
    const secondType = typeof second;
    if (firstType != secondType) {
        return false;
    }

    if ((first === null || second === null) && first !== second) {
        return false;
    }

    if (firstType !== "object" || secondType !== "object") {
        return first === second;
    }

    const firstNumKeys = Object.keys(first).length;
    const secondNumKeys = Object.keys(second).length;
    if (firstNumKeys != secondNumKeys) {
        return false;
    }
    let retval = true;
    for (const key of Object.keys(first)) {
        retval = retval && deepEqual(first[key], second[key]);
    }
    return retval;
};

let simpleObj = { here: "an", object: 2 };
let simpleOther = { here: 1, object: 2 };
console.log(`deep equality of {here: "an", object: 2} and {here: 1, object: 2}: ${deepEqual(simpleObj, simpleOther)}`);
console.log(`deep equality of {here: "an", object: 2} with itself: ${deepEqual(simpleObj, simpleObj)}`);

let obj = { here: { is: "an" }, object: 2 };
console.log(`Deeper obj equality with itself: ${deepEqual(obj, obj)}`);
// → true
console.log(`Deeper obj equality with simple obj (should be false): ${deepEqual(obj, { here: 1, object: 2 })}`);
// → false
console.log(`Deeper obj equality with literal with different addr (should be true): ${deepEqual(obj, { here: { is: "an" }, object: 2 })}`);
// → true

const obj1 = {
    a: 1,
    b: {
        c: [1, 2, { d: /\d+/ }],
        e: new Date('2023-05-11T00:00:00.000Z'),
        f: undefined,
        g: Symbol('foo'),
        h: () => { },
        i: Infinity,
        j: NaN,
        k: null
    },
    l: new Map([['a', 1], [{ b: 2 }, []]]),
    m: new Set([1, 2, { a: 3 }]),
    n: new WeakMap([[{}, {}]]),
    o: new WeakSet([{}, {}])
};

const obj2 = {
    a: 1,
    b: {
        c: [1, 2, { d: /\d+/ }],
        e: new Date('2023-05-11T00:00:00.000Z'),
        f: undefined,
        g: Symbol('foo'),
        h: () => { },
        i: Infinity,
        j: NaN,
        k: null
    },
    l: new Map([['a', 1], [{ b: 2 }, []]]),
    m: new Set([1, 2, { a: 3 }]),
    n: new WeakMap([[{}, {}]]),
    o: new WeakSet([{}, {}])
};

console.log(`WTF: (should be true): ${deepEqual(obj1, obj2)}`);