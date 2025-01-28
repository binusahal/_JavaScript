

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
