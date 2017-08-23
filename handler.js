var AWS=require("aws-sdk");
var docClient=new AWS.DynamoDB.DocumentClient({region:'us-west-2'});

module.exports.hello = (event, context, callback) => {
    // TODO implement
    var params={
      TableName:"usersTable",
      Key:{
          "id": 1//event.params.querystring.id
      }
    };

docClient.get(params,function(err,data){
    if(err){
        console.error("Unable to read the item.",JSON.stringify(err,null,2));
    }
    else{
      var obj=JSON.parse(JSON.stringify(data,null,2));
      callback(null, 'Hello ' + obj.Item.Name);
   }
 });
}
/*'use strict';

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      //input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};*/
