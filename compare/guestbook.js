console.log('starting function')

const AWS = require('aws-sdk')
const docClient = new AWS.DynamoDB.DocumentClient({region: 'us-west-2'})

exports.handle = function(e, ctx, callback) {
  console.log('processing event: %j', e)

  var params = {
    Item: {
      date: Date.now(),
      message: e.message
    },
    TableName: 'guestbook'
  }
  docClient.put(params, function(err, data){
    if(err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}
