const User = require('../models/User');

async function checkEmail(req, res) {
  try {
    const { email } = req.body;
    const checkEmail = await User.findOne({ email }).select("-password");

    if (!checkEmail) {
      return res.status(400).json({
        message: "User not exists in the database",
        error: true,
      })
    }

    return res.status(200).json({
      message: "Email verified succesfully",
      success: true,
      data: checkEmail,
    })



  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    })
  }
}

module.exports = checkEmail;