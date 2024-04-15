const mongoose = require('mongoose');

const url="mongodb+srv://vikramkund738:1234@cluster0.e0etkyb.mongodb.net/Insurance?retryWrites=true&w=majority&appName=Cluster0";

// asynchronous functions - return Promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;