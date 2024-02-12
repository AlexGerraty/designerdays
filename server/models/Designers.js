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
    type: Currency,
    required: true,
  },
  expertise: {
    type: String,
    required: true,
  },
  booking: {
    types: Date,
    required: false,
  }
});



const Designer = model('Designer', designerSchemaSchema);

module.exports = Designer;
