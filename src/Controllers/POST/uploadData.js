const express = require('express');
const router = express.Router();
const {Enquiry} = require('../../Models/Models.js');


router.post('/upload_data', async (req, res) => {
    const formData = req.body;
    const firstName = formData.firstName;
    const lastName = formData.lastName;
    const email = formData.email;
    const queryType = formData.queryType;
    const message = formData.message;

    const enquiry = {
        firstName,
        lastName,
        email,
        queryType,
        message
    }

    try{
        const newEnquiry = new Enquiry(enquiry);
        await newEnquiry.save();
        res.status(200).send('Form has been uploaded');
    }
    catch(error){
        if(error.message.includes('E11000 duplicate key error collection')){
            console.log('Document with the specified _id already exists')             
            res.status(403).send('Document with the specified _id already exists') 
        }
        else
            res.status(500).send('Internal Error has occurres, please try again later');
    }
});

module.exports = router;