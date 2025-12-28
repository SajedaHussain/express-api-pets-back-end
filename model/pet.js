//require mongoose lib
const mongoose=require('mongoose');

//create the mongoose schema
const petSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },
  breed: String,

})

//initialize the mongoose model
const Pet = mongoose.model('Pet', petSchema);

//export the model
module.exports = Pet //use this to export he node js