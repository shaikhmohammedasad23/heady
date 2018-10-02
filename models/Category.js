var mongoose = require('mongoose');
//let Schema = mongoose.Schema;

var CategorySchema = new mongoose.Schema({
  categotyname: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Category', CategorySchema)