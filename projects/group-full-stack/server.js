const express = require('express');
const app = express();

const mongoose = rewuire('mongoose');
const port = indicatedPort || 4204;
app.use(express.json());

mongoose.connect('mongodb://localhost:27017full0-stack-practice', {useNewUrlParser: true}, () => {
    console.log('Connected to MongoDB!')
})

.catch(err => console.error(err))

let indicatedPort;
const port = indicatedPort || 4204;

app.listen(port, () => {
    console.log(`All set on port ${port}`)
})

// Routes
app.use('/emplyess', require('./routes/employee-routes'))