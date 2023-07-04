
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const titlesSchema = new Schema({
Underscoreid:String , 


title:String 



})

module.exports = {
  Titles : mongoose.model('titles', titlesSchema),
}

