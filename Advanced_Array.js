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

    let num1 = prompt("enter first number") // 7
    let num2 = prompt("enter second number") // 5

    let   firstNum = parseInt(num1)
    let secondNum = parseInt(num2)


console.log(cal(firstNum, secondNum, add)) // 12


// JESON - Javascript object Notation
const data = [
    {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
    {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
    {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
    {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
];

// .map  
// return a new array 
// does not manipulate the original array
// used for converting data 


let LowerCaseState = data.map(function(item){ 
return item.state; // we can add to lower case using toLowerCase() method
})

// the above function can be written in arrow function as well

// let LowerCaseState = data.map(item => item.state)

console.log(LowerCaseState) // ["wa", "ny", "ma", "mo"]


// .filter

// returns a new array
// does not manipulate the original array 
// it filters out unto new array 
const bigCity = []
const bigPaps = data.filter(function(item){
  if (item.population > 5000){
    bigCity.push(item.city)
  }
})

console.log(bigCity)  //  ["seattle","new york","boston","kansas city"]  


// Reduce 
// returns a value but not an array
// does not manipulate the original array 
// used for sums and products 

const totalLandArea = data.reduce(function(Accumulator, CurrentValue){
    console.log("This is accumulator: ", Accumulator)
    console.log("This is current value: ", CurrentValue.land_area)
    
    return Accumulator + CurrentValue.land_area
  }, 0) 
  // output :
//   "This is accumulator: " 0

// "This is current value: " 83.9

// "This is accumulator: " 83.9

// "This is current value: " 302.6

// "This is accumulator: " 386.5

// "This is current value: " 48.3

// "This is accumulator: " 434.8

// "This is current value: " 315

// we can see the total land area

const totalLandarea = data.reduce(function(Accumulator, CurrentValue){
    
    return Accumulator + CurrentValue.land_area
  }, 0) 
   
  console.log(totalLandarea) // 749.8
  