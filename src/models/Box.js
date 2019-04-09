const mongoose = require('mongoose');

const Box = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  files: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'File'
  }]
},
{
  timestamps: true // Criação dos campos updatedAt e createdAt
});

module.exports = mongoose.model('Box', Box);
