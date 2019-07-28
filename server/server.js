var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{

	var todo = new Todo({
		text: "this new todo"
	});

	todo.save().then((doc)=>{
		res.send(doc);
	}, (e)=>{
		res.send(e);
	})


})



app.listen(3000, ()=>{
	console.log('stared in 3000');
});


// app.use(bodyParser.json());

// app.post('/todos',(req, res)=>{
// 	var newTodo = new Todo({
// 		text: req.body.text
// 	});
// 	console.log("naman");



// 	newTodo.save().then((doc)=>{
// 	console.log("naman paliwal");		
// 		res.send(doc);
// 	}, (e)=>{
// 		console.log("naman paliwal1234");		
// 		res.status(400).send(e);
// 	});
// 	console.log("naman");
// });





// const newTodo = new Todo({
// 	name: "",
// 	email: "k@gmail.com"
// });

// newTodo.save().then((doc)=>{
// 	console.log(doc);
// }, (err)=>{
// 	console.log(err);
// });


// const newTodo = new Todo({
// 	text: " go and take lunch   ",
// 	completed: true,
// 	compleatedAt: "345"
// });

// newTodo.save().then((doc)=>{
// 	console.log("saved todo", doc)
// }, (e)=>{
// 	console.log(e)
// });
