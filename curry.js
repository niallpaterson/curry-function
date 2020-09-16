const kindOf = require('kind-of');

const curry = (f) => function g(...x) {
  return (x.length >= f.length) ? f(...x) : (...y) => g(...x, ...y);
};

module.exports = (x) => {
  if (kindOf(x) !== 'function') {
    throw new TypeError(`expected function but recieved ${kindOf(x)}`);
  }
    return curry(x);
};
