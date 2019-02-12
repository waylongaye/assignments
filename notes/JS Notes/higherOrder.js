// Higher Order Functions
// Method ~ a built-in function that is part of an object.

// every high order function is going to take an anonymous name function()

// .ForEach
    //arr.forEach(function)

    // var numbers = [1, 2, 3, 4, 5, 6];

    // numbers.forEach(function(number){
    //     console.log(number +3); // this prints the numbers array starting with 4 and adds four more numbers (7, 8, 9, 10)
    // })
    
    // console.log(numbers);



// .Map - does not change original array; creates new array with modifications

    // var numbers = [1, 2, 3, 4, 5, 6];

    //     var newArr = numbers.map(function(number){
    //         return number * 2; // return number > numbers [i + 1]
    //     })
    //     console.log(newArr) // make sure the log the new declared variable; which is "newArr" in this instance


// Filter - returns an array

    // var numbers = [12, 9, 143, 84, 4];

    // var filteredArr = numbers.filter(function(number){
    //     return number < 50; // <--- our function within the .filter boolean condition
    // })

    // console.log(filteredArr)

// // Find - only returns the first value or item that meets the condition! 

    // var numbers = [12, 9, 143, 84, 4];

    // var findNumber = numbers.find(function(number){
    //     return number > 35 // logs 143 only because its the first value that meets the condition
    // })

    // console.log(findNumber)

// FindIndex -- finds the first index that's true

    // var people = [12, 9, 143, 84, 4];

    // var filteredArr = numbers.findIndex(function(number){
    //     return number > 50; // <--- our function within the .filter boolean condition
    // })

    // console.log(filteredArr)

// Every - returns true or false

// Sort - takes two arguments within FUNCTION ex: people.sort(function(a, b)) ... you can use "-" to compare

    // var sorted = people.sort(function(a, b){
    //     return a.age - b.age // remember to paste an object w/ name & age values
    // })

    // Reduce - returns 

    var reduced = person.reduce(function(start, person){
        console.log(start, person)
        return start + person.age
    }, 0)

    console.log(reduced)