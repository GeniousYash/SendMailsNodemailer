const express = require('express');
const bodyParser = require('body-parser');
const sendMail = require('./controllers/sendMail.js'); 

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle sending mail
app.get('/sendMail', sendMail);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
