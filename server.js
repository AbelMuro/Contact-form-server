const S3 = require('./SDK/AWS');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();                                      
const port = 4000;

app.use(cors({
    origin: '*', 
    optionsSuccessStatus: 200 
}));
app.use(bodyParser.json());

app.post('/', (req, res) => {
    const formData = req.body;
    const firstName = formData.firstName;
    const lastName = formData.lastName;
    S3.PutObject(`${firstName} ${lastName}`, formData);
    res.send('Form has been uploaded');
})

app.listen(port, () => {
    console.log(`Server is running`);
});                                         
