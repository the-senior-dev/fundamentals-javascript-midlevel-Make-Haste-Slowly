/* Problem 2: Implement the Curry Function
Write a function named curry that takes a function fn as an argument. 
The curry function should return a new function that can take multiple arguments 
either all at once or one at a time. For example:
*/

function add(a, b, c) {
  return a + b + c;
}

// HINT: You will need to use recursion to solve this problem!
function curry(fn) {
  return function curriedFunction(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...moreArgs) {
        return curriedFunction.apply(this, args.concat(moreArgs));
      };
    }
  };
}

const curriedAdd = curry(add);
curriedAdd(1, 2)(10); // 13
curriedAdd(1)(2)(10); // 13
curriedAdd(1, 2, 10); // 13

// Example
/*
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output should be 6
console.log(curriedAdd(1, 2, 3)); // Output should also be 6
*/
