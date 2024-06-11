const express = require('express');
const registerUser = require('../controllers/registerUser');

const router = express.Router();

// create an user API
router.post('/register', registerUser);

module.exports = router;