const express = require('express');
const connectDB = require('./Database/db.js');
const uploadData = require('./Controllers/POST/uploadData.js');
const {config} = require('dotenv');
const cors = require('cors');
const app = express();                                      
const port = 4000;

config();
connectDB();

app.use(cors({
    origin: 'https://contact-us-front-end.netlify.app', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    optionsSuccessStatus: 200 
}));

app.use(express.json());
app.use(uploadData);

app.get('/', async (req, res) => {
    res.status(200).send('Hello World');
})

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running on this port ${port}`);
});      

module.exports = app;
