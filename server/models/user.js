const mongoose = require('mongoose');

const User = new mongoose.model('User',{
	name: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	email:{
		type: String,
		minlength: 1,
		trim: true,
		required: true
	}
});


module.exports = {User};