export default function makeChange(num){
  return {
    
    'q': Math.floor(num / 25),
    'd': Math.floor((num  % 25) / 10),
    'n': Math.floor(((num  % 25) % 10) / 5),
    'p': num % 5
  }  
}
