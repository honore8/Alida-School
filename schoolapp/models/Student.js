const mongoose = require('mongoose')
const Schema = mongoose.Schema


//Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name field is required'
    },

    gender: {
        type: String,
        required: 'Gender field is required'

    },

    department: {
        type: String,
        required: 'Department field is required'
    },

    schoolID: {
        type: String,
        required: 'School ID field is required'
    },

    contactInfo: {
        tel: [Number],
        email: [String],
        address: {
            city: String,
            street: String,
            houseNumber: String
        }
    }

});
const Student = mongoose.model('student', studentSchema);

module.exports = Student