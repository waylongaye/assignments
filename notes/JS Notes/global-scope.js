// var name = "Bill";

// function sayGreeting(){
//     var name = "Fred";
//     console.log(name);
// }

// sayGreeting(); // calls the function which will log "Fred" --- local variable
// console.log(name); // logs "Bill" because "Bill" is the global variable value

// OR

var name = "Bill";

function sayGreeting(name){
    var name = "Fred";
    console.log(name);
}

sayGreeting("Fred"); // calls the function which will log "Fred" --- local variable
console.log(name); // logs "Bill" because "Bill" is the global variable value