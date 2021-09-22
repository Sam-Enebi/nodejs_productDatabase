// mongoose to connect to our databse and perform operations on it
const mongoose = require('mongoose');
// M5mLT3fPMjvDb7Lc;

// db connection function
const dbConn = () => {
	mongoose
		.connect(
			// mongo db uri to connect our database
			'mongodb+srv://superuser:superuser123@cluster0.l7nzz.mongodb.net/<dbname>?retryWrites=true&w=majority',
			{
				useNewUrlParser: true,
				useCreateIndex: true,
				useFindAndModify: false,
				useUnifiedTopology: true,
			}
		)
		.then(() => console.log('Database is connected successfully'))
		.catch(err => console.log(err));
};

module.exports = dbConn;
