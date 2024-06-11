const getUserDetailsFromToken = require('../helpers/getUserDetaailsFromToken');
const User = require('../models/User');

async function updateUserDetails(req, res){
  try {
    const token = req.cookies.token || "";

    const user = await getUserDetailsFromToken(token);

    const { name, email, profilePic } = req.body;

    const updatedUser = await User.updateOne(
      { _id: user._id},
      { name, email, profilePic}
    );

    const userInformation = await User.findById(user._id);

    return res.status(200).json({
      message: "User updated succesfully!",
      data: userInformation,
      success: true,
    })

    
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true
    })
  }
}

module.exports = updateUserDetails;