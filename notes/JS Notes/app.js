/*  

Primitive Datatypes

    - Booleans
    - Numbers
    - Strings

    Complex

        - Arrays
        - Objects

    Strings
        - words, texts, sentences

    Numbers

        - actual numbers
        - var age = 42
        - 








    Complex Datatypes

    Arrays

        var things = ["strings", 23, 76, {objects: "random", "unknown", "anonymous"}, true, false, ["second", "array", "here"]]

        ex: var animals [[1,2,3], ["cat", "dog"] [true, true, false]]
                console.log(animals[1][2]) <--- this allows you to access "dog" --->


    Objects

        var person = {
            
            name: "waylon",
            age: "25",
            isAlive: true,
            hobbies: ["workout", "reading", {type: "writing", skillLevel: 7}] <--- you can place an object within this array as well --->
            speak: function( what's inside here is called a PARAMETER){
                console.log("hello!")
            }
        }

        person.speak( what's inside these parenthesis is an ARGUMENT)
        -------------------------------------------------------------------------------

        EX of a parameter replacing an argument: 

        speak: function(phrase){
                console.log("hello " + phrase)
            }
                person.speak("Waylon!") <--- this prints "hello Waylon!"

        
        <--- A FUNCTION WITHIN AN OBJECT IS A METHOD --->
        
    dot notation

        console.log(person.isAlive) <--- use the " . " to call an object
        console.log(person.hobbies[1]) <--- calling the "reading" array in hobbies --->
        console.log(person.hobbies[2].type) <--- here, you are printing the .type objects  

    bracket notation
        
    console.log(person["age"]) <--- accessing the age ("25") object --->


















*/