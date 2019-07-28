const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todo', (err, db)=>{

	if(err){
		return console.log("some thing is wrongr");
	}


// const {MongoClient, ObjectID} = require('mongodb');

// MongoClient.connect('mongobd://localhost:27017/Todo', (err, db)=>{
// 	if(err){
// 		return console.log("error while connecting");
// 	}


	console.log("db is connected");
	//delete many
	// db.collection('Todos').deleteMany({_id: new ObjectID("5d3c8d1aecb60129b4bc6500")}).then((result)=>{
	// 	console.log(`some error: ${result}`);
	// });
	//delete one
	// db.collection('Todos').deleteOne({_id: new ObjectID("5d3c8d1aecb60129b4bc6500")}).then((result)=>{
	// 	console.log(`some error: ${result}`);
	// });



	db.collection('Todos').findOneAndDelete({compleated: false}).then((result)=>{
		console.log(result);
	});

});