const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost/redrixlongsword';
const mongoDbUrl = process.env.MONGODB_URI || connectionString
mongoose.connect(mongoDbUrl, { useNewUrlPoarser: true});

mongoose.connection.on('connected', () => {
		console.log('Mongoose connected at ' , connectionString);
});	
mongoose.connection.on('disconnected', () => {
		console.log('Mongoose disconected ');
});	
mongoose.connection.on('error', () => {
		console.log('Mongoose error ', err);
});	