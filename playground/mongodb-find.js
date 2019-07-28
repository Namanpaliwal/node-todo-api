//const MongoClient = require('mongodb').MongoClient;
// this is es6 syntax its is called dectructing the object
// this is same as first line

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo', (err, db)=>{

	if(err){
		console.log("some thing is wrongr");
	}

	console.log('db is connected');
	// db.collection('Todos').find({
	// 	_id: new ObjectID("5d3ca0bc45fc871924cb4007")
	// }).toArray().then((docs)=>{
	// 		console.log('Todos');
	// 		console.log(JSON.stringify(docs, undefined, 2));
	// }, (err)=>{
	// 	console.log('unable ot facthc data', err)
	// })


	db.collection('Todos').find().count().then((count)=>{
		console.log(`value of count is : ${count}`);
	}, (err)=>{
		console.log('something bad went wronge');
	});

});