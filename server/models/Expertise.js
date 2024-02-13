const { Schema, model } = require('mongoose');


const expertiseSchema = new Schema({
  name: {
    type: String,
    required: true,
  }
});



const Expertise = model('Expertise', expertiseSchema);

module.exports = Expertise;
