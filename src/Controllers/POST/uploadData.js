const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const {Enquiry} = require('../../Models/Models.js');
const ObjectId = mongoose.Types.ObjectId;


router.post('/upload_data', (req, res) => {
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
        newEnquiry.save();
        res.status(200).send('Form has been uploaded');
    }
    catch(error){
        if(error.message.includes('E11000 duplicate key error collection')){
            console.log('Document with the specified _id already exists')             
            res.status(403).send('Document with the specified _id already exists') 
        }
    }
});

module.exports = router;