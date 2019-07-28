const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo', (err, db)=>{
	if(err){
		return console.log('some error ocure');
	}

	console.log('db connect');

	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID("5d3c924f7a9db23ab07d891c")
	},{
		$set:{
			text: "naman paliwal hai"
		},
		$inc:{
			age: 10
		}
	},{
		returnOriginal: true
	}).then((result)=>{
		console.log(result);
	})

	db.close();
});
