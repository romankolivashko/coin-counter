import {coinCounter} from './../src/js/coin.js'

describe('coinCounter',() => {
test (' return number of quarters', () =>{
expect(coinCounter(100)).toEqual(expect.stringContaining("4 quarters"));

})
})

describe('coinCounter',() => {
test (' return number of quarters, dimes, nickels, and pennies', () =>{
expect(coinCounter(136)).toEqual(expect.stringContaining("5 quarters 1 dimes 1 pennies"));

})
})

describe('coinCounter',() => {
  test (' return number of quarters, dimes, nickels, and pennies', () =>{
  expect(coinCounter(141)).toEqual(expect.stringContaining("5 quarters 1 dimes 1 nickels 1 pennies"));
  
  })
  })



