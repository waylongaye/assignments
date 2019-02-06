// Review Strings
// Lower and Upper case.

// Var first = ‘Lara’;

// Var last = ‘Knowles’;

// console.log(first.toUpperCase());
// console.log(first)

// Strings are immutable.  You can’t change.  It looks like it did, but it didn’t.  toUpperCase returned an uppercase version of it.  They didn’t change the string, they returned a variation on the string.

// Can reassign by saying
// first  = first.toUpperCase();
// console.log(first)

// first = first.toLowerCase();

// Concatenate
// full = first.concat(“ “, last);
// Console.log(full)

// Could also use a plus sign to concatenate.

// Index of
// Var first = “Lara”;

// Var index = first.indexOf(“r”);
// Console.log(index)
// It’ll give you a 2, that’s the index item r is.

// If it can’t find what you’re talking about, it’ll return a negative one.
// If you put
// var index = first.indexOf(“car”);
// Console.log(index)

// Or to see if car exists in first?
// If(first.indexOf(“car”) > -1) {

// }

// Slice
// Takes 2 arguments
// The principal is up to but not including

// Var greeting = “Hello World”;

// Var first = greeting.slice(0, 6);

// Console.log(first)
//  //prints Hello
// ^ up to 6 but not including
// Var first = greeting.slice(0, 1);
// Console.log(first)
// //H

// Var fullName = “Emily Knowles”;

// Var splitOn = fullName.indexOf(“ “)

// Console.log(splitOn)
// Returns 5 as expected

// Now
// Var fullName = “Emily Knowles”;

// Var splitOn = fullName.indexOf(“ “)

// Var first = fullName.slice(0, splitOn)

// Console.log(first)

// Other slice ex
// var areaCode = “12345-4444”;

// var firstFive = zipCode.slice(0, 5);

// console.log(firstFive)
//  //12345
// buuuuuut (6, 10) would give you 4444
// could do (-4)

// Split
// Turns the string into an array.
// var areaCode = “12345-4444”;

// var asArray = areaCode.split(“-“);

// console.log(as Array);

// Or
// var areaCode = “Hello friends I’m at V school.”;

// var asArray = zipCode.split(““);

// console.log(as Array);

// If multiple sentences, could split on period (“.”)
// (“”) would do individual characters

var str = "Hello my name is Albert";

var slicer = str.slice(0, 16) ;

console.log(slicer + " Waylon")