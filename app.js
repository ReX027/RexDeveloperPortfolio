const connectToMongo = require('./db');
const express = require('express')
const path = require("path");
const bodyParser = require('body-parser');
const User = require("./models/Users");

connectToMongo();
const app = express();
const port = 5000

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded());
// Pug configuration
app.set('view engine', 'pug'); //setting template engine as pug
app.set('views', path.join(__dirname, 'views')) //setting the views directory

app.get('/', (req, res) => {
    res.status(200).render('index.pug');
})
app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
})

app.post('/submit',(req, res) => {
    const userdata = new User(req.body);
    userdata.save().then(() => {
        res.status(200).render('submit.pug');
    }).catch(() => {
        // res.status(400).('Server Error'); 
    })
})
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
})