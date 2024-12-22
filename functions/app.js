const serverless = require('serverless-http'); 
const app = require('../src/index.js'); 		//make sure you export the app module from the index.js
const connectDB = require('../src/Database/db.js');

const handler = serverless(app);  		       
module.exports.handler = async (e, context) => {
    await connectDB();	
    const result = await handler(e, context);
    return result;
};