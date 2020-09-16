const it = require('ava');
const curry = require('../curry');

it('does not throw a type error if argument is function', (t) => {
  try { curry(() => {}) } catch (err) {
    t.fail('should not throw type error if argument is function')
  };
  t.pass();
});

it('throws a type error if argument is object', (t) => {
  try{
    curry({});
  } catch (err) {
    t.assert(err instanceof TypeError);
  }
  t.pass();
});

it('throws a type error if argument is array', (t) => {
  try{
    curry([]);
  } catch (err) {
    t.assert(err instanceof TypeError);
  }
  t.pass();
});

it('throws a type error if argument is string', (t) => {
  try{
    curry('string');
  } catch (err) {
    t.assert(err instanceof TypeError);
  }
  t.pass();
});

it('throws a type error if argument is numeral', (t) => {
  try{
    curry(1);
  } catch (err) {
    t.assert(err instanceof TypeError);
  }
  t.pass();
});

it('throws a type error if argument is boolean', (t) => {
  try{
    curry(true);
  } catch (err) {
    t.assert(err instanceof TypeError);
  }
  t.pass();
});

it('throws a type error if argument is undefined', (t) => {
  try{
    curry(undefined);
  } catch (err) {
    t.assert(err instanceof TypeError);
  }
  t.pass();
});

it('throws a type error if argument is NaN', (t) => {
  try{
    curry(NaN);
  } catch (err) {
    t.assert(err instanceof TypeError);
  }
  t.pass();
});

it('throws a type error if argument is null', (t) => {
  try{
    curry(null);
  } catch (err) {
    t.assert(err instanceof TypeError);
  }
  t.pass();
});

it('throws a type error if argument is Symbol', (t) => {
  try{
    curry(Symbol());
  } catch (err) {
    t.assert(err instanceof TypeError);
  }
  t.pass();
});


