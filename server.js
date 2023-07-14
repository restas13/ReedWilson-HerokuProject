//Importing express and routes
const express = require('express');
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/htmlRoutes');

// Using express in the app variable and defining the port to be used once deployed
const app = express();
const PORT = process.env.PORT || 3001;

// Route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on port 3001 'listed on line 8' or heroku deployment port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
