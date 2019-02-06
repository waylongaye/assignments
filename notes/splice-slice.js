function stuff (str){
    var strArr = str.split(" "); // create a var that splits the string
    strArr.splice(4,1, "Waylon"); // splice by every word in "Hello my name is Albert"
    return strArr.join(" ") // join takes the commas out the "array" and replaces them with spaces
}

console.log(stuff("Hello my name is Albert"))

// prints out "Hello, my name is Waylon"