
//import
const express = require('express');

//initialize
const app = express();

const postRouter = require('./postRouter');

//middleware
app.use('/post', postRouter);

const port = 5000;

app.get('/' , (req , res) => {
    res.send('response from express');
});

app.get('/add', (req , res) => {
    res.send('response from add express');
})

app.listen(port ,() => { console.log('express server started now');});