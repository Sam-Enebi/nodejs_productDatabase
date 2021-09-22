const express = require('express');

const expressLayouts = require('express-ejs-layouts');

// Routes for the pages
const productRouter = require('./routes/productRoutes');

// DB connection imported from db
const dbConn = require('./db/db');

// connecting to database
dbConn();

// to run express
const app = express();

// view files
app.use(expressLayouts);
app.set('view engine', 'ejs');

// parse data from body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// home page router
app.get('/', (req, res) => {
	res.render('home');
});


app.use('/product', productRouter);

//checks requests and sending response
const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));
