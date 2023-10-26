const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true,
    },
    message:{
        type: String,
        required:true
    }
  });

const Users = mongoose.model('users',UserSchema)

module.exports = Users;