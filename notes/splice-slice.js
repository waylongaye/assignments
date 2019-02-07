// function stuff (str){
//     var strArr = str.split(" "); // create a var that splits the string
//     strArr.splice(4,1, "Waylon"); // splice by every word in "Hello my name is Albert"
//     return strArr.join(" ") // join takes the commas out the "array" and replaces them with spaces
// }

// console.log(stuff("Hello my name is Albert"))

// prints out "Hello, my name is Waylon"
function Car(numberofWheels, color){ // Change the "color" parameter to " color="red" " to make it the default
    this.wheels = numberofWheels // this refers to the object being made
    this.color = color // 
    this.makeSound = function(){ // 
        return "vroom vroom"
    }
}

var myCar = new Car(4, "red") // "new" object being made using the constructor function
var waylonsCar = new Car(8, "white")