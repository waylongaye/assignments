const express = require("express");
const app = express();
const port = 3333;
const uuid = require("uuid") // this package creates an id for your objects(UUID = universal unique ID)
const database = require("./database")

app.use(express.json())

app.get("/spot", (req, res) => {
    res.send(database)
})

app.listen(port, () => {
    console.log(`server is running ${port}`)
})

app.post("/", (req, res) => {
    const newObj = req.body;
    newObj._id = uuid.v4(); // newObj._id is creating id / uuid.v4() is assigning it a random id
    database.push(req.body)
    res.send(newObj)
})

app.get("/spot/:_id", (req, res) => {
    console.log(req.param) // in this instance req.param is the id from "./spot/:_id"
    const {_id} = req.params //the id is saved to req.params
    res.send(database.find(spot => spot._id === _id)) //.find is going to each object of your array like a for loop
    //create an ternary statement for when an id is not found
    found ? res.send(found) : res.send("not found")

})

app.delete("/spot/:_id", (req, res) => {
    const {_id} = req.params;
    const index = database.findIndex(spot => spot._id === _id) // finds index
    database.splice(index, 1) // here you splice to find a specific id
    res.send("Item successfully removed!") // here add a ternary for removed or not removed
})

//spot is each object in your array (database.js)
app.put("/spot/:_id", (req, res) => {
    const updatedObj = req.body;
    //down here we want to update info
    const {_id} = req.params // destructuring here

    //forEach works through the id like a for loop
    database.forEach(spot => {
        if (spot._id === _id) {
            spot = Object.assign(spot, updatedObj) // Object.assign reassigns spot to any specific changes in updatedObj
        }
    })
})