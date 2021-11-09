import { coinCounter, coinCounterClosure } from './../src/js/coin.js';


describe('coinCounter', () => {
  test(' return number of quarters', () => {
    expect(coinCounter(100)).toEqual(expect.stringContaining("4 quarters"));

  });
});

describe('coinCounter', () => {
  test(' return number of quarters, dimes, nickels, and pennies', () => {
    expect(coinCounter(136)).toEqual(expect.stringContaining("5 quarters 1 dimes 1 pennies"));

  });
});

describe('coinCounter', () => {
  test(' return number of quarters, dimes, nickels, and pennies', () => {
    expect(coinCounter(141)).toEqual(expect.stringContaining("5 quarters 1 dimes 1 nickels 1 pennies"));

  });
});


describe('coinCounterClosure', () => {
  test('should return a string with number of quarters, dimes, nickels, and pennies for change', () => {
    expect(coinCounterClosure(91)()).toEqual("3 quarters 1 dimes 1 nickels 1 pennies");
  });
});

describe('coinCounterClosure', () => {
  test('should return a string with number of quarters, dimes, nickels, and pennies for change', () => {
    expect(coinCounterClosure(141)()).toEqual("5 quarters 1 dimes 1 nickels 1 pennies");
  });
});

describe('coinCounterClosure', () => {
  test('should return a string with number of quarters, nickels, dimes, and pennies for change', () => {
    expect(coinCounterClosure(181)()).toEqual("7 quarters 0 dimes 1 nickels 1 pennies");

  });
});



