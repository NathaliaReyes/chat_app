const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connection = require('./config/connection');

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello from THE SERVER SIDE');
});

connection().then(() => {
    app.listen(PORT, () => {
        console.log('Server running at:  ' + PORT);
    });
})
