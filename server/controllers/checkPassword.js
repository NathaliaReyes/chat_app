const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function checkPassword(req, res) {
  try {
    const { password, userId } = req.body;
    const user = await User.findById(userId);
    const verifyPassword = await bcrypt.compare(password, user.password);

    if(!verifyPassword){
      return res.status(400).json({
        message: "Please check password!",
        error: true,
      })
    }
    const tokenData = {
      id : user._id,
      email: user.email,
    }
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET,{ expiresIn : '1d' });

    const cookieOption = {
      http: true,
      secure: true
    }

    return res.cookie('token', token, cookieOption).status(200).json({
      message: "Login succesfully",
      token: token,
      success: true,
    })
    
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    })
  }
}


module.exports = checkPassword;