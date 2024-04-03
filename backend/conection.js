const mongoose = require('mongoose');

const url="mongodb+srv://mmm:mmm@cluster0.gvyon.mongodb.net/mynewdatabase?retryWrites=true&w=majority&appName=Cluster0";

// asynchronous functions - return Promise
mongoose.connect(url)
.then((result) => {
    console.log('database connected');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;