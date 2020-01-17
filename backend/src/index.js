const express = require('express');
const mongoose = require('mongoose');
const routes = require('./router');
const cors = require ('cors');


const app = express();

// Coneção com MongoDB Atlas

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-p3av1.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);