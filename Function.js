
// Function 

function SayHellow(){
    console.log("Hello, World!");
}
   SayHellow(); // Output: Hello, World!


// Function Expression / Anonymouse Function

let addition = function (num1, num2) {
    return num1 - num2
  }
  
  console.log(addition(8, 5)); // Output: 3

  // Arrow Function / Fat Arrow

//ES6 Syntax

const multiply = (num1, num2) => {
    return num1 * num2
  }
  
  console.log(multiply(2,5)); // Output: 10
  
  // or you can say 
  
  const multiplyy = (numb1, numb2) => numb1* numb2 
  console.log(multiplyy(5,3)) // 15

  
  // Function Declaration Hoisting

console.log(divide(10,5)); // 2

function divide(num1,num2){
  return num1 / num2 
}  // this will not throw an error because of hoisting
