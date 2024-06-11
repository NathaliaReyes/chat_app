const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connection = require('./config/connection');
const router = require('./routes/index');

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

// This line fix the "Cannot destructure property 'name' of 'req.body' as it is undefined." in Postman
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello from THE SERVER SIDE');
});

// API endpoints
app.use('/api', router);

connection().then(() => {
    app.listen(PORT, () => {
        console.log('Server running at:  ' + PORT);
    });
})
