const {model, Schema} = require('../conection');

const mySchema = new Schema({
    title : {type : String, required : true},
    provider : {type: String, required: true},
    category : String,
    cover : String,
    image : String,
    premium: Number,
    period: Number,
    createdAt:{type: Date, default: Date.now}
});

module.exports = model('insurance', mySchema);