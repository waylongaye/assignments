var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    },
    {
      name: "Anakin Skywalker",
      occupation: "Dark Jedi"
    },
    {
      name: "Luke Skywalker",
      occupation: "Jedi"
    },
    {
      name: "Rick",
      occupation: "Mad Scientist"
    },
    {
      name: "Morty",
      occupation: "Sidekick"
    }
  ]

//   for(var i = 0; i < peopleArray.length; i += 2) {
      
//   }

const name = [];
const occupation = [];

for(let i = 0; i < peopleArray.length; i += 2){
    name.push(peopleArray[i].name, peopleArray[i + 1].occupation) // [i + 1] determines the beginning position (Singer)
}
// this is pushing every other name (starts with "Harrison Ford") and occupation (starting with "Singer")
console.log(name)