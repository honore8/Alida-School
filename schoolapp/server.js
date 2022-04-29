const express = require ('express');
const app = express ();
const port = 8000;

app.get ('/', (req, res)=>{
    res.send('Welcome to home page')
});

app.listen (port, ()=>{
    console.log(`Server up and running on port ${port}`);
})
