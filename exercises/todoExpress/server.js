const express = require("express");
const uuid = require("uuid")
const port = 7777;
const app = express();
const database = require("./database");

app.use(express.json())

app.post("/", (req, res) => {
    const newObj = req.body;
    newObj._id = uuid.v4();
    database.push(req.body);
    res.send(newObj)
})


app.get("/todo", (req, res) => {
    res.send(database)
})

app.get("/todo/:_id", (req, res) => {
    const {_id} = req.params;
    // res.send(database).find(todo => todo.id === _id)
})







app.delete("/todo/:_id", (req, res) => {
    const {_id} = req.params; // req.params is an empty object
    const index = database.findIndex(todo => todo._id === _id) // index is now the beginning of the todo database; the function here loops through the object until it finds the ID the client types into the url
    database.splice(index, 1); // splice finds the index of the url(ID), that's typed in and splices from there and removes -1- item from the database
    res.send("Your todo item was removed!")
})

app.listen(port, () => {
    console.log(`This app is running on port ${port}`);
})





