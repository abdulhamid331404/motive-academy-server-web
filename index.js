const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 5000;

const courses = require('./data/courses.json')


app.get('/courses', (req, res)=>{
    res.send(courses)
});

app.get('/courses/:id', (req, res)=>{
   const id = req.params.id;
   const getSingleItem = courses.find(c => c.id == id);
   res.send(getSingleItem)
});


app.listen(port, ()=>{
    console.log('Server is running', port);
});



