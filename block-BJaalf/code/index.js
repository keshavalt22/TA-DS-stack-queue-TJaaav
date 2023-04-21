
let value = "";
function repeater(x) {
    if (value.length === 5) {
        return value;
    } else {
        value += x;
    }
    return repeater(x);
}


function loop(x) {
    if (x === 0) return x;
    console.log(x);
    return loop(x - 1)
}

function countTo(x = 0, limiy) {
    if (x === limit) return x;
    console.log(x);
    x++;
    return countTo(x, limit);
}

// let result = 1, count = 1;
function exponent(base, expo) {
    if (count > expo) return result;
    result *= base;
    count++;
    return exponent(base, expo)
}

let result = 0;
function factorial(x) {
    if (x === 0) return result;
    result *= x;
    return factorial(x - 1)
}


let newArr = [];
function recursiveReverse(arr) {
    if (arr.length === 0) return newArr;
    newArr.push(arr.pop());
    recursiveReverse(arr);
}