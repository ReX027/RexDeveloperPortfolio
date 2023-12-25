const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    message:{
        type: String,
        required:true
    }
  });

const Users = mongoose.model('users',UserSchema)

module.exports = Users;