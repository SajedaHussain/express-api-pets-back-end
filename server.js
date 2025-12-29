//dotenv
const dotenv = require('dotenv');
dotenv.config();//should be always in the top


//mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);//make connection with the url
mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});



//express
const express = require('express');
const app = express();

//controllers
const trackCrl = require('./controllers/tracks')

//Middlewar
const morgan = require('morgan');
app.use(morgan('dev'));//dev is the comperhansiv show the log
app.use(express.json());//tell express that will recive the json and pass beacuse will use API 


// Routes 
app.use('/tracks',trackCrl) // use posstman for testing 


app.listen(3000, () => {
  console.log('The express app is ready!');
});
