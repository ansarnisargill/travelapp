const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, 'Date is required']
  },
  password: {
    type: String,
    required: [true, 'Created date is required']
  }
});
let Day = mongoose.model('Day', userSchema);

module.exports = Day;