const mongoose = require('mongoose')
const { Schema } = mongoose

const expertiseSchema = new Schema({
    name: {
    type: String,
    required: false,
  }
});



const Expertise = mongoose.model('Expertise', expertiseSchema);

module.exports = Expertise;
