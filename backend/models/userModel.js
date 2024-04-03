const {model, Schema} = require('../conection');

const mySchema = new Schema({
    email : {type : String, required : true, unique: true},
    name : {type: String, required: true,},
    postedAt : Date,
    password : String,
    image : String,
    role: { type: String, default: 'user'},
    avatar:{type: String, default: 'placeholder .png'},
    createdAt:{type: Date, default: Date.now}
});

module.exports = model('user', mySchema);