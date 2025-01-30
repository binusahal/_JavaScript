// callback

// Higher Order Function (HOF) - funcation that has paramater as another function 
// callback Function - Function you can pass to the HOF as an argument .

// Higher order Function HOF
function cal(num1,num2, callback){
    return callback(num1, num2) 
  }
  
  let add = (num1, num2) => {
    return  num1 + num2
  }
  
  // we can make as an arrow function 
  
  // let add = (num1,num2) => num1 + num2
  
  console.log(cal(3, 5, add)) // 8

  // we can enter  from the screan 

    let num1 = prompt("enter first number")
    let num2 = prompt("enter second number")

    let   firstNum = parseInt(num1)
    let fecondNum = parseInt(num2)


console.log(cal(firstNum, fecondNum, add))