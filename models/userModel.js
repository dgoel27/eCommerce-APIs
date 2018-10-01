const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let userSchema = new Schema (
    {
        userId: {
            type: String,
            unique: true
        },
        firstName: {
            type: String,
            default: ''
        },
        lastName: {
            type: String,
            default: ''
        },         
        email: {
            type: String,
            default: ''
        },
        mobileNumber: {
            type: String,
            unique: true
        },                                                  
        password: {
            type: String,
            default: ''
        },
        createdOn: {
            type: Date,
            default: Date.now
        }                        
    }
)

mongoose.model('user',userSchema);