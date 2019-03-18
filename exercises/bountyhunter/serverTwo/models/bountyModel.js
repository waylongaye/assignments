const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bountySchema = new Schema({
    //keyOne: valueOne
    firstName: String,
    lastName: String,
    allegiance: {
        type: String,
        enum: ["Jedi", "Sith"]
    },

    living: {
        type: Boolean,
        default: true
    },
    bountyAmount: Number,
    image: {
        type: String,
        // default: // set default image here with url address
    }
    

})

module.exports = mongoose.model("Bounty", bountySchema)