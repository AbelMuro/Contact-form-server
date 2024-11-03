const {Schema} = require('mongoose');

const enquirySchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    queryType: {type: String, required: true},
    message: {type: String, required: true},
});

module.exports = {enquirySchema}