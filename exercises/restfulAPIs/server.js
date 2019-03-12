// Installing & Initiating A Server
// Initial Setup:
/* 
npm init -y
1. install express (declare variable to reuire ("express"))
2. declare variable for express() function
3. install nodemon
4. declare variable for port #
5. create  host/port for server to live on w/ app.listen()

*/
const express = require("express");
const bodyParser = require("body-parser")
//body-parser converts data into an accessible JS object
// read readMe of body-parser node module(?)
const app = express()

const port = 7777; // you can see port as PORT frequently


// you want to use a bodyparser method
// changing the incoming JSON object into JS
app.use(bodyParser.json())

const database = [
    {
        name: "spaghetti",
        type: "pasta",
        sauce: "red",
        id: 9235974
    },{
        name: "fettucine",
        type: "pasta",
        sauce: "alfredo",
        id: 9834579
    },{
        name: "lasagna",
        type: "pasta",
        sauce: "marinara",
        id: 983983
    }
]




app.get('/food', (req, res) =>{ // <-- everything in get is an argument, the callback function is the 2nd argument (req/res)
    res.send({database}) // using app(this is everything express is returning, now we have everything we need from app)
    //the . get method gets the "url string" with a req & res(everything we want to return back to the user)
})



app.post('/food', (req, res) => {
    console.log(req.body)
    database.push(req.body)
    res.send(req)
})

app.delete("/food/:foodid")


// this is establishing where the server is going to live(such as localhost:3000 which is reserved for React)
// first argument is the port your app is living on
// get comfortable with callback functions(2nd argument)
app.listen(port, () => {
    console.log(`server is running ${port}`)
}) // all you need to initiate a server