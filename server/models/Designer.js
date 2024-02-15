const mongoose = require('mongoose')
const { Schema } = mongoose


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
  image: {
    type: String,
    required: false
  },
  expertise: {
    type: Schema.Types.ObjectId,
    ref: 'Expertise',
    required: false
  }
});



const Designer = mongoose.model('Designer', designerSchema);

module.exports = Designer;
