axios.get("https://api.vschool.io/waylon/todo").then(response => {
    renderTodos(response.data)
})

function renderTodos(todos){ /// this represents renderTodos(response.data) ABOVE

    todos.forEach(function(todo){ // todos.forEach represents the array of sent data named response.data
        var parent = createParent() // parent is now the parent div
        var parent = document.createElement("div"); // the div tag is now the parent div
        parent.className = "todo"; // assigns the "todo" class name to the parent div
        var text = document.createTextNode(todo.title); // .createTextNode(todo.title; this is response.data.title) creates a text string out of the value (todo.title)

        
        parent.appendChild(text);// here you append the parent (the div) to the string of text(todo.title) // ASK "how can you use .innerText instead?"
        
        var input = document.createElement("input"); // here you create an input element
        input.className = "input";// here you give that element a class name
        input.type = "checkbox";// here you assign the input's type to a checkbox
        
        input.addEventListener("click", handleChecked); // here you add an event listener of click; handleChecked is just to test your event listener essentially
        
        parent.appendChild(input);
        
        if(todo.completed){
            parent.classList.toggle("strikened");
            input.checked = true;
        }

        document.getElementById("todo-list").appendChild(parent);
    })
}

function handleChecked(e){
    console.log("here");
    e.target.parentNode.classList.toggle("strikened");
}