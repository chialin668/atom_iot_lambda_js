// working iot lambda/dynamodb example
var AWS = require('aws-sdk')
const client = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'})

exports.handle = function(e, ctx, callback) {
    var params = {
        TableName: "timeseries",
        Item: {
        	"serial_number": "39e0cf91_b28a_40c7_aacf_6a88a499816d",
        	"timestamp": 1486870154.710027,
        	"data": {
        		"temperature": 20.3350123778,
        		"humidity": 57.1985085145
        	}
        }
    };
    client.put(params, function(err, data) {
        if (err) {
            callback(JSON.stringify(err, null, 2), null);
        } else {
            callback(null, JSON.stringify(data, null, 2));
        }
    });
}
