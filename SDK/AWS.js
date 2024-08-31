const aws = require('aws-sdk');
const { config } = require('dotenv');

config();
        
const s3 = new aws.S3({
    region: process.env.region,
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    signatureVersion: process.env.signatureVersion
})

const PutObject = (objectName, data) => {
    const params = {
          Bucket: 'contact-form-data',
          Key: objectName,                    
          Body: JSON.stringify(data)
    };
    
    s3.putObject(params, (err, data) => {
        if(err)
            console.log(err);
        else
            console.log('data has be uploaded!');
    });                
}

module.exports = {PutObject};