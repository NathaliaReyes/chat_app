const express = require('express');
const registerUser = require('../controllers/registerUser');
const checkEmail = require('../controllers/checkEmail');
const checkPassword = require('../controllers/checkPassword');
const userDetails = require('../controllers/userDetails');
const logout = require('../controllers/logout');
const updateUserDetails = require('../controllers/updateUserDetails');
const router = express.Router();

// CreateUser an user API
router.post('/register', registerUser);
// checkEmail of the user
router.post('/email', checkEmail);
//checkUserPassword
router.post('/password', checkPassword);
//login user details:
router.get('/userDetails', userDetails);
//logout:
router.get('/logout', logout);
//update User:
router.put('/updateUserDetails', updateUserDetails);

module.exports = router;