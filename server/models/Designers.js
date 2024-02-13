const { Schema, model } = require('mongoose');


const designerSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true, 
    trim: true
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
    min: 50.00
  },
  expertise: {
    type: String,
    required: true,
    
  }
});



const Designer = model('Designer', designerSchema);

module.exports = Designer;
