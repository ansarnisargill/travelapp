const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },
    clientDescription: {
        type: String,
        required: [true, 'client description is required']
    }
});
let Day = mongoose.model('Day', daySchema);

module.exports = Day;