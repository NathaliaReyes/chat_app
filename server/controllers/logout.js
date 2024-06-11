async function logout(req, res) {
  try {
    const cookieOption = {
      http: true,
      secure: true
    }

    return res.cookie('token', '', cookieOption).status(200).json({
      message: "user logout",
      success: true,
    })

  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: error,
    })
  }
}

module.exports = logout;