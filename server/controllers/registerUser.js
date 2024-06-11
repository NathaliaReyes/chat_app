const User = require('../models/User');
const bcrypt = require('bcryptjs');

async function registerUser(req, res) {
  try {
    const { name, email, password, profilePic } = req.body

    const checkEmail = await User.findOne({ email }) 

    //check if this email already exists in the database 
    if(checkEmail) {
      return res.status(400).json({
        message: "Already exist in the database",
        error: true,
      })
    }

    // password into Hash
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const payload = {
      name, 
      email,
      profilePic,
      password : hashPassword,
    }

    const user = new User(payload);
    const userSaved = await user.save();

    return res.status(201).json({
      message: "User created succesfully!",
      data: userSaved,
      success: true,
    })


  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true
    })
  }
}

module.exports = registerUser;