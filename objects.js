// OBJECTS

const student = {
  
    // key and value
    
    name : "mohamed ali",
    location : "kismayo",
    number : 615555555,
     
  }
  
  console.log(student);  // output: { name: 'mohamed ali', location: 'kismayo', number: 0615555555 }
  
  // Dot notation
  console.log(student.name); // output: mohamed ali
  console.log(student.number); // output: 0615555555

  // bracket notation

  console.log(student['location']); // output: kismayo


  // Methode
const students = {
  
    // key and value
    name : "mohamed ali",
    location : "kismayo",
    number : 615555555,
    
      profile: function() {
      // template literals ${}
      return `Hi, my Name is ${this.name}, and i live in ${this.location}, and my number is ${this.number}` 
    }
     
  }
   console.log(students.profile()); // output: Hi, my Name is mohamed ali, and i live in kismayo, and my number is 0615555555

   // we can nest also another object

   // methode
    const studentss = {
  
    // key and value
    name : "mohamed ali",
    location : "kismayo",
    number : 615555555,
    sister: {
      name : "Halima",
      Age: 25,
      school: "GANAANE",
    },
      profile: function() {
      // template literals
      return `Hi, my Name is ${this.name}, and i live in ${this.location}, and my number is ${this.number}` 
    }
     
  }
   console.log(studentss.profile()); // output: Hi, my Name is mohamed ali, and i live in kismayo, and my number is 0615555555
   console.log(studentss.sister); // output: { name: 'Halima', Age: 25, school: 'GANAANE' }

   console.log (student.sister.name); // output: Halima


   //  Array in Objects

const countries = [
    { city: "Mogadishu", country: "Somalia", population: 1536790},
    { city: "Nairobi", country: "Kenya", population: 1536790},
    { city: "Riyad", country: "Saudi", population: 1536790},
  ]
  
  console.log(countries); // output: [{ city: 'Mogadishu', country: 'Somalia', population: 1536790 }]

  console.log(countries[1]); // output: { city: 'Nairobi', country: 'Kenya', population: 1536790 }

  console.log(countries[1].country); // output: Kenya

  // add new object in the array

countries.push({city: "khartoum", country: "sudan", population: 458904843});
console.log(countries); // output: [{ city: 'Mogadishu', country: 'Somalia', population: 1536790 },
// { city: 'Nairobi', country: 'Kenya', population: 1536790 }, 
// { city: 'Riyad', country: 'Saudi', population: 1536790 },
// {city: 'khartoum', country: 'sudan', population: 458904843 }]


// how many countries are more than 2million
const bigCountries = []

for (let i = 0; i < countries.length; i++){
  if (countries[i].population > 1000000){
    bigCountries.push(countries[i].country)
  }
}

console.log(bigCountries)
  // output: ['Somalia', 'Kenya', 'Saudi']