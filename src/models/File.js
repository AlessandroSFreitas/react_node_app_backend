const mongoose = require('mongoose');

const File = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  }
},
{
  timestamps: true // Criação dos campos updatedAt e createdAt
});

module.exports = mongoose.model('File', File);
