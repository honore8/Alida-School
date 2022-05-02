const bodyParser = require('body-parser')
const express = require('express');
const app = express(); //express app init
const port = 8000; //port number
const mongoose = require('mongoose');

//connect to mongoDB Database
const dbURI = 'mongodb+srv://user:Kb69sY9vu463jtDz@cluster0.aer5d.mongodb.net/express_db?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected'))
    .catch((err) => console.log(err))

app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
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
//student model
const student = mongoose.model('student', studentSchema);


//setting up routes
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/students', (req, res) => {
    //
})

//new student post route
app.route('/new-student').get((req, res) => {
    return res.render('new-student')

}).post((req, res) => {
        const newStudent = new student(req.body);
        console.log(req.body);
        newStudent.save()
        .then((result) => {
            return res.redirect('/')
        })
        .catch((err) => {})

    });


//404 Page Handler
app.use((req, res) => {
    res.status(404).send(`Page not found 😉`);
})

//listening on port 8000
app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
})
