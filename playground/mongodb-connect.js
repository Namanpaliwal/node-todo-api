//const MongoClient = require('mongodb').MongoClient;
// this is es6 syntax its is called dectructing the object
// this is same as first line
const {MongoClient, ObjectId} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/Todo', (err, db)=>{
	if(err){
		return console.log('unable to connect to server');

	}
	console.log('connect to mongodb');

	db.collection("Todos").insertOne({
		//_id : 'paliwal',
		text: 'something to do',
		compleated: false
	},(err, result)=>{
		if(err){
			return console.log('unable to connect');
		}
		console.log(result.ops[0]._id.getTimestamp());
	});

	db.close();
})