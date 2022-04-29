const express = require ('express');
const app = express (); //express app init
const port = 8000; //port number
const mongoose = require ('mongoose');

//connect to mongoDB Database
mongoose
        .connect ('mongodb://localhost:27017/schoolTestApp', {useNewUrlParser: true, useUnifiedTopology: true})  
        .then(() => console.log('MongoDB Connected'))
         .catch(err => console.log(err));

//Schema
const 
        

//setting up routes
app.get ('/', (req, res)=>{
    res.send('Welcome to home page')
});

//404 Page Handler
app.use((req, res)=>{
    res.status(404).send(`Page not found 😉`);
})

//listening on port 8000
app.listen (port, ()=>{ 
    console.log(`Server up and running on port ${port}`);
})
