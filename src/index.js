const express = require('express');
const connectDB = require('./Database/db.js');
const uploadData = require('./Controllers/POST/uploadData.js');
const cors = require('cors');
const app = express();                                      
const port = 4000;

connectDB();

app.use(cors({
    origin: '*', 
    optionsSuccessStatus: 200 
}));

app.use(express.json());
app.use(uploadData);

app.get('/', async (req, res) => {
    res.status(200).send('Hello World');
})

app.listen(port, () => {
    console.log(`Server is running on this port ${port}`);
});                                         
