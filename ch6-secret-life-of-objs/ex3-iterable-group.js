// Make the Group class from the previous exercise iterable. Refer to the section about the iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface anymore.
// If you used an array to represent the group’s members, don’t just return the iterator created by calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of this exercise.
// It is okay if your iterator behaves strangely when the group is modified during iteration.

class Group {

    constructor() {
        this.values = [];
        this.iteratorIdx = 0;
    }

    add(val) {
        if (this.values.indexOf(val) == -1) {
            this.values.push(val);
        }
    }

    delete(val) {
        let idx = this.values.indexOf(val);
        if (idx != -1) {
            this.values.splice(idx, 1);
        }
    }

    has(val) {
        return this.values.indexOf(val) != -1;
    }

    get length() {
        return this.values.length;
    }

    at(i) {
        return this.values[i];
    }

    toString() {
        return this.values.toString();
    }

    static from(other) {
        let newObj = new this();
        for (const val of other) {
            newObj.add(val);
        }
        return newObj;
    }
}

class GroupIterator {
    constructor(group) {
        this.group = group;
        this.iteratorIdx = 0;
    }

    next() {
        if (this.iteratorIdx == this.group.length) {
            return {done: true}
        }
        let value = this.group.at(this.iteratorIdx);
        this.iteratorIdx += 1;
        return {value, done: false}
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
  };

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
// → a
// → b
// → c