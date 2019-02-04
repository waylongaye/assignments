var peopleArray = [
    {
      namez: "Harrison Ford",
      occupation: "Actor"
    },
    {
      namez: "Justin Bieber",
      occupation: "Singer"
    },
    {
      namez: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      namez: "Oprah",
      occupation: "Entertainer"
    },
    {
      namez: "Anakin Skywalker",
      occupation: "Dark Jedi"
    },
    {
      namez: "Luke Skywalker",
      occupation: "Jedi"
    },
    {
      namez: "Rick",
      occupation: "Mad Scientist"
    },
    {
      namez: "Morty",
      occupation: "Sidekick"
    }
  ]

//   for(var i = 0; i < peopleArray.length; i += 2) {
      
//   }

const name = [];
const occupation = [];

// for(let i = 0; i < peopleArray.length; i += 2){
//     name.push(peopleArray[i].name, peopleArray[i + 1].occupation) // [i + 1] determines the beginning position (Singer)
// }
// // this is pushing every other name (starts with "Harrison Ford") and occupation (starting with "Singer")
// console.log(name)

// var names = [];
// var occupations = [];

// for(var i = 0; i < peopleArray.length; i++){
//   names.push(peopleArray[i].namez);
//   occupations.push(peopleArray[i].occupation);
// }
// console.log(name, occupations)

var names = [];
var occupations =  [];

for(var i = 0; i < peopleArray.length; i++){
  names.push(peopleArray[i].namez);
  occupations.push(peopleArray[i].occupation);
}

console.log(names, occupations)