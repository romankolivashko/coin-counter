import {coinCounter} from './../src/js/coin.js'

describe('coinCounter',() => {

test (' return number of quarters', () =>{
expect(coinCounter(100)).toEqual(expect.stringContaining("Quarters: 8"));

})
})

