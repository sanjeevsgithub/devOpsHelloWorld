var AWS = require('aws-sdk');

var docClient=new AWS.DynamoDB.DocumentClient({region:'us-west-2'});



exports.handler = (event, context, callback) => {
    
// TODO implement
    
var params={
        
	TableName:"Employee",
        
	Key:{
            
		"Id": 1//event.params.querystring.id
        
	}
   
};

   
docClient.get(params,function(err,data){
    
	if(err){
        
		console.error("Unable to read the item.",JSON.stringify(err,null,2));
    
	}
    
	else{
        
		var obj=JSON.parse(JSON.stringify(data,null,2));
        
		//var obj=JSON.parse(data,null,2);
        
		//callback(null, 'Hello ' + JSON.parse(JSON.stringify(data,null,2)));
        
		//callback(null, JSON.parse(JSON.stringify(data,null,2)));
        
		//callback(null, 'Hello ' + JSON.stringify(data,null,2));
        
		callback(null, 'Hello ' + obj.Item.Name);
    
	 }
   
	});

};