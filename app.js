const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
// const alert=require('alert');
// const bodyParse
const mongoose=require("mongoose");
const port = 80;
mongoose.connect('mongodb://localhost:27017/contact');


const contactuUS = new mongoose.Schema({ 
    name: String,
    number: String,
    age: String,
    gender: String,
    gender: String
 });
var con = mongoose.model('con', contactuUS);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
app.get('/', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug', params);
});
app.get('/contact', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('contactus.pug', params);
});
app.post ('/contact', (req, res)=>{
    var my=new con(req.body);
    my.save().then(() =>
    console.log('hello'))
    // alert("We will contact you soon"));
});
app.get('/about', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('about.pug', params);
});
app.get('/cd', (req, res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('courses.pug', params);
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});