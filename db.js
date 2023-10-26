const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/submit"

async function connectToMongo() {
    await mongoose.connect(mongoURI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }).then(() => console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
}

module.exports = connectToMongo;