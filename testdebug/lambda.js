let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    ddb.put({
        TableName: "KTest",
        Item: {
            ID: "1"
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