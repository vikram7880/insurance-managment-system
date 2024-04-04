// import
const express = require('express');
const cors = require('cors');

// initialize
const app = express();
const port = 5000;

const postRouter = require('./routers/userRouter');
const insuranceRouter = require('./routers/insuranceRouter');

// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));

// convert json to js
app.use(express.json());

app.use('/user', postRouter);
app.use('/insurance', insuranceRouter);


// start express server



app.listen( port, () => { console.log('express server started')} );