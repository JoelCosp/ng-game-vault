const mongoose = require('mongoose');

// User schema definition
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  }
});

// Export the User model
module.exports = mongoose.model('User', userSchema);