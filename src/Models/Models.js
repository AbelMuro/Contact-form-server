const mongoose = require('mongoose');
const {enquirySchema} = require('./Schemas.js');

const Enquiry = mongoose.model('Enquiry', enquirySchema, 'enquiries');

module.exports = {Enquiry}