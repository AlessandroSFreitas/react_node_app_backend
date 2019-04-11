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
  timestamps: true, // Criação dos campos updatedAt e createdAt
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
});

File.virtual('url').get(function () {
  return `http://localhost:5000/files/${encodeURIComponent(this.path)}`
})

module.exports = mongoose.model('File', File);
