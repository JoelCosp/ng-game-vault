const mongoose = require('mongoose');

// User schema definition
const videogameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  platforms: {
    type: String,
    required: true,
  },
  release_year: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  multiplayer: {
    type: Boolean,
    required: true,
  },
});

// Export the User model
module.exports = mongoose.model('Videogame', videogameSchema);