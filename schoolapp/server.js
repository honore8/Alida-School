const bodyParser = require('body-parser')
const express = require ('express');
const app = express (); //express app init
const port = 8000; //port number
const mongoose = require ('mongoose');

//connect to mongoDB Database
const dbURI = 'mongodb+srv://user:Kb69sY9vu463jtDz@cluster0.aer5d.mongodb.net/express_db?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected'))
    .catch((err) => console.log(err))

app.use(bodyParser.urlencoded({ extended: true }))

//Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'this field is required'
    },

    gender: {
        type: String,
        required: false
    },

    department: {
        type: String,
        required: 'required'
    },

    schoolID: {
        type: String,
        required: true
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
app.get ('/', (req, res)=>{
    res.send('Welcome to home page')
});

app.get ('/students', (req, res)=>{
    //
})

//new student post route
app.post ('/new-student', (req, res)=>{
    const newStudent = new student(req.body);
    newStudent.save((err, doc)=>{
        if(!err){
            console.log(`new student added: ${doc}`);
        } else {
            console.log(err);
        }
    })

});


//404 Page Handler
app.use((req, res)=>{
    res.status(404).send(`Page not found 😉`);
})

//listening on port 8000
app.listen (port, ()=>{ 
    console.log(`Server up and running on port ${port}`);
})
