var AWS = require("aws-sdk")
const client = new AWS.DynamoDB.DocumentClient({region: "us-west-2"})

exports.handle = function(event, context, callback) {
    var params = {
        TableName: "Movies",
        Key: {
            "year": 2015,
            "title": "The Big New Movie"
        }
    };

    console.log("Reading an item");
    client.get(params, function(err, data) {
        if (err) {
            //console.error("Error writing item to DynamoDB. ", JSON.stringify(err, null, 2));
            callback(JSON.stringify(err, null, 2), null);
        } else {
            //console.log("Item added to DynamoDB. ", JSON.stringify(daa, null, 2));
            callback(null, JSON.stringify(data, null, 2));
        }
    });
}
