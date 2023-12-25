const mongoose = require('mongoose');
async function connectToMongo() {
      try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/submit`);
        // console.log(`${connectionInstance}`);
        console.log(`\n MongoDB connected ! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection Failed",error);
        process.exit(1);
    }
}

module.exports = connectToMongo;