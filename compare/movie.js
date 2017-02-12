// working now!!!
var AWS = require('aws-sdk')
const client = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'})

exports.handle = function(e, ctx, callback) {
    var params = {
        TableName: "Movies",
        Item: {
            'year': 2015,
            'title': "The Big New Movie",
            'info': {
                'plot': 'Nothing happens at all',
                'rating': 0
            }
        }
    };
    client.put(params, function(err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });
}
