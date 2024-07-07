const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const loginRoute = require('./routes/login');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.log('Error connecting to MongoDB Atlas:', error));

app.use('/', loginRoute);

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
