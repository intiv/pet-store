const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  species: {
    type: String,
    required: true
  },
  breed: {
    type: String
  },
  description: {
    type: String
  }
});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;
