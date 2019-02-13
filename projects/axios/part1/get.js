// axios = require("axios");

// axios.get("https://api.vschool.io/waylon/todo").then(function(response){
//     console.log(response.data)
//     for(var i = 0; i < response.data.length; i++){
//     // document.getElementById("get").innerHTML += response.data[i].title + "<br>";

//     if(response.data[i].completed === true){
//         // var idkYet = response.data.title
//         document.getElementById("get").innerHTML += response.data[i].title.strike() + "<br>"
//     } else{
//         document.getElementById("get").innerHTML += response.data[i].title + "<br>";
//     }
// }
// })

// get todos

//log them to console

// ---Something Here--- log the titles one by one

// break

axios.get("https://api.vschool.io/waylon/todo").then(function (res, req) { // get request, need to get data from todo api
    const div = document.getElementById("get"); // grab the div on the index.html and store it the div variable.
    const p = document.createElement("div"); // create a new div and store in the p variable. This div is not on the page yet. It's just in javascript
    var input = document.createElement("input");

    input.className = "input";
    input.type = "checkbox"

    input.addEventListener("click", handleChecked)
    
    for (var i = 0; i < res.data.length; i++){
        
        p.innerText += res.data[i].title // the p div, add the data in the response in between the tags, so it desplays on the page.
        div.appendChild(p); // add the p div to the div that's on the page.
        // addStrikeThrough()
}

});

function addStrikeThrough(){
    for(var i = 0; i < res.data.completed;i++){
    if(res.data[i].completed = true){
        res.data[i].completed.strike()
    }
}}


function handleChecked(e){
    console.log("here");
}
//     e.target.parentNode.classList.toggle("strikened");
// axios.get("https://api.vschool.io/waylon/todo").then(function(res, req){
//     var div = document.getElementById("get");
//     var p = document.createElement('div');
//     p.innerText = res.data.map(todo => {
//         return todo.title;
//     })
//     div.appendChild(p);
// })
// // axios api here
// res.data.forEach(function(todo){
//     console.log(todo.title);
//     console.log(todo.description);
// })


// create function(renderTodos); plugin axios.then data 





// IMPORTANT NOTES //

// place BELOW within renderTodos function 
// create input element for checkbox
// var input = document.createElement("input")
// input.className = "input";
// input.setAttribute("checkbox") or input.type("checkbox") // input.id(and other methods of that input can be called)

// input.addEventListener("click", handleChecked) <--- the second parameter is a function that helps you count the number of checks for tests

// create a function that counts the check; just console.log("checked") within the function

