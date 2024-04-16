const {model, Schema} = require('../conection');

const mySchema = new Schema({
    email : {type : String, required : true, unique: true},
    name : {type: String, required: true,},
    review: String,
    avatar:{type: String, default: 'placeholder .png'},
    createdAt:{type: Date, default: Date.now}
});

module.exports = model('review', mySchema);