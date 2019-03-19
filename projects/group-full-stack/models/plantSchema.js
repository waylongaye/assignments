const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const plantSchema = new Schema ({
    plantName: {
        type: String,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    },
    harvestDate: {
        type: String,
        required: true
    },
    plantLife: {
        type: String,
        required: true
    },
    plantPicture: {
        type: String,
        default: ''

    }
})

module.exports = mongoose.model('Plant', plantSchema)