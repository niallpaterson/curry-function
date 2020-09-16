# 🍛 Curry-function

Curry-function. Passed a function f, returns a curried variant of f. Lightweight and minimal. Handles arbitrary number of arguments and supports overloading. Similar to [curry](https://www.npmjs.com/package/curry), but does not use [dangerous eval](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#Never_use_eval!).

## Setup

Install locally with npm:

````shell
npm i curry-function
````

Import:

````JavaScript
const curry = require('curry-function');

// or

import curry from 'curry-function';
````

## API

Syntax:

````JavaScript
curry(f); // retuns curried variant of 'f'
````

First argument is required and must be of type function. Otherwise a TypeError is thrown.

Example:

````JavaScript
const curry = require('curry-function');

const sum = (x, y, z) => x + y + z;

const curriedSum = curry(sum);

const applyFirst = curriedSum(1); // returns function
const applySecond = applyFirst(2); // returns function
const applyAll = applySecond(3); // returns 6
````

Overloading:

````JavaScript
curriedSum(1, 2);

// returns function, is equivalent to:

curriedSum(1)(2);

// argument function can be called as usual:

curriedSum(1, 2, 3);

// returns 6, is equivalent to:

curriedSum(1)(2)(3);

// is equivalent to:

sum(1, 2, 3)
````

## Test

Tested with [AVA](https://www.npmjs.com/package/ava).

````shell
npm test
````

or

````shell
npx ava
````

## Currying

Given a function f with n parameters, the curried variant of f returns n functions, each taking exactly one of f's parameters, one parameter by one. For an overview on the uses of currying, see [this article](https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983).

To illustrate:

````JavaScript
// not curried expression

const notCurried = function(x, y, z) {
  return z + y + z;
}

// curried expression

const curried = function(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    }
  }
};

// not curried arrow

const notCurried = (x, y, z) => x + y + z;

// curried arrow

const curried = (x) => (y) => (z) => x + y + z;
````
