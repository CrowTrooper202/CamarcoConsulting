const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema=new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 5,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    userRole:{
        type: Boolean,
        default: false,
        required: true
        //for detirming if the user is an employee or not
        //falsu = not an employee
    },
    projects:{
        type: Schema.Types.ObjectId,
        ref:'Project'
    },
    invoices:{
        type: Schema.Types.ObjectId,
        ref:'Invoice'
    }

})

const User = model('User', userSchema);
  
  module.exports = User;