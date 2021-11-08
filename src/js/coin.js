export const coinCounter = (num) => {
  if (isNaN(num)) {
    return "Enter a number only.";
  }
  if (num === 0) {
    return "";
  } else if (num / 25 >= 1) {
    let quarters = Math.trunc(num / 25);
    console.log(quarters);
    return `${quarters} quarters ` + coinCounter(num - quarters * 25);
  } else if (num / 10 >= 1) {
    let dimes = Math.trunc(num / 10);
    return `${dimes} dimes ` + coinCounter(num - dimes * 10);
  } else if (num / 5 >= 1) {
    let nickels = Math.trunc(num / 5);
    return `${nickels} nickels ` + coinCounter(num - nickels);
  } else {
    let pennies = num;
    return `${pennies} pennies ` + coinCounter(0);
  }
};

//pass $356.37
// let dollars = Math.trunc(amount);
//return 356
// let penny = (amount - dollars) * 100;
//356.37 - 356 = 0.37;
//0.37 * 100 = 37

// let nickel = penny % 5

// if(cents === 0){
// return cents};
