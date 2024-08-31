const S3 = require('./SDK/AWS');
const { exec } = require('child_process');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();                                      
const port = 80;

app.use(cors({
    origin: '*', 
    optionsSuccessStatus: 200 
}));

app.use(bodyParser.json());
app.use(express.json());

app.post('/', (req, res) => {
    const formData = req.body;
    const firstName = formData.firstName;
    const lastName = formData.lastName;
    S3.PutObject(`${firstName} ${lastName}`, formData);
    res.send('Form has been uploaded');
});

app.post('/webhook', (req, res) => {
    const payload = req.body;

    // Check if the event is a push event
    if(payload.ref === 'refs/heads/main') {
        // Pull the latest changes from the repository
        exec('git pull', (error, stdout, stderr) => {
            if(error) {
                console.error(`Error pulling changes: ${error.message}`);
                return res.status(500).send('Error pulling changes!');
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
            console.log('Changes pulled successfully');
            res.status(200).send('Changes pulled successfully');
        });
    } 
    else {
        console.log('Not a push event to the main branch!');
        res.status(200).send('Not a push event to the main branch');        
    }

    
});

app.listen(port, () => {
    console.log(`Server is running on this port ${port}`);
});                                         
