

const group ="web1"

function TestFun(){

    var cohort ="web2"

    console.log(group);
} 

console.log(TestFun()) // web1

// if we replaced the calling 
console.log(cohort) // nothing is printed

// if we add a variable to the TestFun function 

function TestFun(){

    var cohort ="web2"
    const group ="design"
    console.log(group);
} 

console.log(TestFun())  // design

// we make function with a return statement

function add(num1, num2){
    return num1+num2

}
console.log(5+5)

//BLOCK SCOPE:  U CAN GET ONLY IN IF STATEMENT AND FOR LOOP .

let answer ="it's True"

if (1 === 1){
    let answer ="it's False"
}
console.log(answer) // it's True

// for loop 
for (let i=0; i<5; i++){
    console.log(i)
} 
// 0 ,1,2,3,4

// if we add var we can call the variable outside the loop

for (let i=0; i<5; i++){

    var gereeting = " salam"
}

console.log(gereeting) // salam

// Hoisting  

working()

function working(){
    console.log("ITS WORKING")
}
// ITS WORKING

// Closure 

let myname ="sahal"

function sayhi(){

    function greetingg(){
        console.log(myname)
    }

    greetingg()
}
sayhi() // sahal


// Reference 


function game(sport){
  
    let score = 0
    
    return function win(){
      score++
      return `Your ${sport} game score is ${score}`
    }
    
  }
  
  // we make reference 
  let football = game("football")
  
  console.log(football()) // Your football game score is 1
  // we can add more 
  console.log(football()) // Your football game score is 2
  
  let basketball = game("basketball")

    console.log(basketball()) // Your basketball game score is 1
    console.log(basketball()) // Your basketball game score is 2