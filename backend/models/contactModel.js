
const {model, Schema} = require('../conection');

const mySchema = new Schema({
   fname: String,
   lname: String,
   company: String,
   email: String,
   Phonenumber: Number,
   message: String,

});

module.exports = model('contact', mySchema);