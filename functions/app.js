const serverless = require('serverless-http'); 
const app = require('../src/index.js'); 		//make sure you export the app module from the index.js

const handler = serverless(app);  		        //if you are NOT using mongoose, you can just return serverless(app);
module.exports.handler = async (e, context) => {	//if you are using mongoose, you will need to use a callback
    const result = await handler(e, context);
    return result;
};