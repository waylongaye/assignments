// const carrots = ["bright orange", "ripe", "rotten"]

// // const mapVegetables = arr => {
// //     return arr.map(function(carrot) {
// //         return { type: "carrot", name: carrot }
// //     })
// // }


// const mapVegetables = arr => arr.map(carrot => ({type: "carrot", name: carrot}))

// console.log(mapVegetables(carrots));


// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return !!person.friendly
//     })
// }

const animals = ['dog', 'cat', 'mouse']
const otherAnimals = ['elephant', 'lion', 'hyena'] 

const bunchofAnimals = [animals, ...otherAnimals]

console.log(bunchofAnimals)