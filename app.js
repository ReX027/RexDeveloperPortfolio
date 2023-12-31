const connectToMongo = require('./db');
const express = require('express')
const path = require("path");
const bodyParser = require('body-parser');
const User = require("./models/Users");

require('dotenv').config()

connectToMongo();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use('/public', express.static('public')); // For serving static files
app.use(express.urlencoded());
// Pug configuration
app.set('view engine', 'pug'); //setting template engine as pug
app.set('views', path.join(__dirname, 'views')) //setting the public directory

app.get('/', (req, res) => {
    res.status(200).render('index.pug');
})
app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
})

app.post('/submit', (req, res) => {
    const userdata = new User(req.body);
    userdata.save().then(() => {
        res.status(200).render('submit.pug');
    }).catch((err) => {
        res.status(400).send("Server Error Pls wait..");
    })
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`The application started successfully on port ${PORT}`);
})