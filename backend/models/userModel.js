const {model, Schema} = require('../conection');

const mySchema = new Schema({
    email : {type : String, required : true},
    name : String,
    postedAt : Date,
    password : String,
    image : String,
    likes : {type : Number, default : 0},
    shares : {type : Number, default : 0}
});

module.exports = model('user', mySchema);