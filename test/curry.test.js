const it = require('ava');
const curry = require('../curry');

it('can accept an arrow function', (t) => {
  curry(() => 'test')();
  t.pass('should accept an arrow function');
});

it('can accept a function expression', (t) => {
  curry( function test() { 'test' })();
  t.pass('should accept a function expression');
});

it('can accept a function declaration', (t) => {
  function test() {
    return 'test';
  };
  curry(test)();
  t.pass('should accept a function declaration')
});

it('given a zero-arity function, returns a function', (t) => {
  const output = curry(() => 'test');
  const actual = output instanceof Function;
  const expected = true;
  
  t.is(actual, expected,
  'should return a function');
});

it('given a single-arity function, returns a function', (t) => {
  const output = curry((a) => a);
  const actual = output instanceof Function;
  const expected = true;

  t.is(actual, expected,
    'should return a function');
});

it('given a multi-arity function, curries that function', (t) => {
  t.plan(3);

  const func = curry((a, b, c) => [a, b, c]);

  const funcApplied1 = func(1);
  const actual1 = funcApplied1 instanceof Function;
  const expected1 = true;

  t.is(actual1, expected1,
    'given first argument, should partially apply function');

  const funcApplied2 = funcApplied1(2);
  const actual2 = funcApplied2 instanceof Function;
  const expected2 = true;

  t.is(actual2, expected2,
    'given first argument then second argument, should partially apply function');

  const funcApplied3 = funcApplied2(3);
  const expected3 = [1, 2, 3];

  t.deepEqual(funcApplied3, expected3,
    'given first argument then second argument then third argument, should return result');
});

it('supports overloading', (t) => {
  t.plan(2);

  const func = curry((a, b, c) => [a, b, c]);
  const overloaded = func(1, 2);

  const actual1 = overloaded instanceof Function;
  const expected1 = true;

  t.is(actual1, expected1,
    'should support overloading')

  const fullyApplied = overloaded(3);
  const expected2 = [1, 2, 3];

  t.deepEqual(fullyApplied, expected2,
    'given overloaded first and second argument, if called should return result')
});

it('can be fully overloaded, i.e., called like the argument function', (t) => {
  const func = curry((a, b, c) => [a, b, c]);
  const actual = func(1, 2, 3);
  const expected = [1, 2, 3];

  t.deepEqual(actual, expected,
    'given fully overloaded function, behaves like the argument function')
});

