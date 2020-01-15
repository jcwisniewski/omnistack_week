const express = require('express');
const mongoose = require('mongoose');
const routes = require('./router');

const app = express();

// Coneção com MongoDB Atlas

mongoose.connect('mongodb+srv://root:1593572846@cluster0-tiup3.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);