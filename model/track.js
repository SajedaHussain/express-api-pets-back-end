//require mongoose lib
const mongoose=require('mongoose');

//create the mongoose schema
const tackSchema = new mongoose.Schema({
   title: {
    type: String,
    required: true,
  },
  artist: {
    type: Number,
    min: 0,
    required: true,
  }

})

//initialize the mongoose model
const Track = mongoose.model('Pet', tackSchema);

//export the model
module.exports = Track 