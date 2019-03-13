const express = require("express");
const uuid = require("uuid")
const port = 7777;
const app = express();
const database = require("./database")


app.listen(port, () => {
    console.log(`This app is running on port ${port}`)
})