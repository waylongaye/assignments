

// // #1

// var doubledNumbers = [5, 10, 15, 20];

// var newArr = doubledNumbers.map(function(doubledNumber){
//     return doubledNumber * 2
// })

// console.log(newArr)

// // #2

// var doubledNumbers = [5, 10, 15, 20];

// var newArr = doubledNumbers.map(function(doubledNumber){
//     return doubledNumber.toString()
// })

// console.log(newArr)

// // #3

// var capitalizeNames = (["john", "JACOB", "jinGleHeimer", "schmidt"]); // ["John", "Jacob", "Jingleheimer", "Schmidt"]



// var newArr = capitalizeNames.map(function(capitalizeName){
//     return capitalizeName.toUpperCase()
// })

// console.log(newArr)

// // #4

// function namesOnly(arr){
//     return arr.map(function(name){
//         console.log(name.name)
//     })
// }

// namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kanye West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) 
// // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


// // #5
// function makeStrings(arr){
//     arr.map(function(person){
//         if(person.age > 18){
//             console.log(`${person.name} can enter The Matrix`)
//         } else{
//             console.log(`${person.name} can't enter The Matrix`)
//         }
//     })
// }

// makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]) 
// // ["Angelina Jolie can go to The Matrix", 
// // "Eric Jones is under age!!", 
// // "Paris Hilton is under age!!", 
// // "Kayne West is under age!!", 
// // "Bob Ziroll can go to The Matrix"]


// // #6

// function readyToPutInTheDOM(arr){
//     arr.map(function(person){
//         console.log(`<h1>${person.name}</h1><h2>${person.age}</h2>`)
//     })
// }
var newArr = readyToPutInTheDOM(function(person))[
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]


// other way with .map

var newArr = readyToPutInTheDOM.map(function(person){
    return `<h1>${person.name}</h1><h2>${person.age}</h2>`
})

console.log(newArr)