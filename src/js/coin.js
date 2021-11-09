export const coinCounter = (num) => {
  if (isNaN(num)) {
    return "Enter a number only.";
  };
  if (num === 0) {
    return "";
  } else if (num / 25 >= 1) {
    let quarters = Math.trunc(num / 25);
    return `${quarters} quarters ` + coinCounter(num - quarters * 25);
  } else if (num / 10 >= 1) {
    let dimes = Math.trunc(num / 10);
    return `${dimes} dimes ` + coinCounter(num - dimes * 10);
  } else if (num / 5 >= 1) {
    let nickels = Math.trunc(num / 5);
    return `${nickels} nickels ` + coinCounter(num - nickels * 5);
  } else {
    let pennies = num;
    return `${pennies} pennies ` + coinCounter(0);
  };
}

export const coinCounterClosure = (num) => {
  let quarters = Math.floor(num / 25);
  console.log(quarters);
  let dimes = Math.floor((num % 25) / 10);
  let nickels = Math.floor(((num % 25) % 10) / 5);
  let pennies = Math.floor((((num % 25) % 10) % 5) / 1);

  return function displayChange() {
    return `${quarters} quarters ${dimes} dimes ${nickels} nickels ${pennies} pennies`;
  }

}
  
//Prime whiteboarding

// const lionSound = soundMaker("roar");
// const tigerSound = soundMaker("grrr");
// const bearSound = soundMaker("grrr");

// const misterJunior = nameEnhancer("Mister")("Junior");
// const misterSenior = nameEnhancer("Mister")("Senior");
// const missJunior = nameEnhancer("Miss")("Junior");

// const addTwoMultiplyByThree = addaMult(2)(3);
// const addTwoMultiplyByFive = addaMult(2)(5);
// const addTwoMultiplyBySeven = addaMult(2)(7);

// const reverseSentence = (string) => { 
//   let words = string.split(" ");
//   let reversedWords = words.reverse();
//   let reversedSentence = reversedWords.join(" ");
//   return reversedSentence;
// };

// const concatenatesStrings = (string1, string2, string 3) => {
//   let concatenatedString = string1 + string2 + string3;
//   return concatenatedString;
// };
