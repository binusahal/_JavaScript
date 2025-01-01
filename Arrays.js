// Arrays
/* Arrays allow us to group and store data together.
 Usually this data is related, but that is not a requirement. 
Arrays give us the ability to pass collections of data around as a single variable. */

// Arrays

const Fruits = ["Mango", "Banana", "Tomato"]
console.log(Fruits) // Output: ["Mango", "Banana", "Tomato"]

// index

console.log(Fruits[1]) // Banana

// .length
//check how many items are in the array
console.log(Fruits.length) // 3

console.log(Fruits.length -1); // 2

// .push & .pop

const flavors = ['checolate chip', 'Sugur', 'Lemon crisp'];

console.log(flavors); //  Output: ['checolate chip', 'Sugur', 'Lemon crisp']

flavors.push('Carmel'); 

 console.log(flavors); // ['checolate chip', 'Sugur', 'Lemon crisp', 'Carmel']

 flavors.pop();

console.log(flavors); // ['checolate chip', 'Sugur', 'Lemon crisp']


// .unshift & .shift

const Vegetable = ['Banana', 'Lemon', 'Tomato' ]
console.log(Vegetable);

// add the first index
Vegetable.unshift('Mango');

console.log(Vegetable);

// remove the first index

Vegetable.shift();

console.log(Vegetable);