const bodyParser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/StudentRoute');
const session = require('express-session');


const app = express(); //express app init
const port = 8000; //port number

//connect to mongoDB Database
const dbURI = 'mongodb+srv://user:Kb69sY9vu463jtDz@cluster0.aer5d.mongodb.net/express_db?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('connected'))
    .catch((err) => console.log(err))

app.use(session({ secret: 'student',saveUninitialized: true,resave: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', studentRoutes);

app.set('view engine', 'ejs')

//setting up routes
app.get('/', (req, res) => {
    res.render('index')
});

//404 Page Handler
app.use((req, res) => {
    res.status(404).send(`Page not found 😉`);
})

//listening on port 8000
app.listen(port, () => {
    console.log(`Server up and running on port ${port}`);
})
