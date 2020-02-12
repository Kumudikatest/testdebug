let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    console.log(event);
    ddb.put({
        TableName: "KTest",
        Item: {
            ID: "3"
        }
    }).promise()
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            // error handling goes here
            console.log(err);
        });

    return { "message": "Successfully executed" };
};