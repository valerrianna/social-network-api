const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'You must enter a username',
        trim: true
    },
    email: {
        type: String,
        require: 'You must enter an email',
        unique:true,
        match: [/.+\@.+\..+/]
    },
    // thoughts: {
    //     type: 
    // },
    // friends: {

    // }
})