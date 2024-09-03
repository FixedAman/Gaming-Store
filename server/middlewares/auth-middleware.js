const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ msg: "Token not found" });
  }

  // Extract the actual token without the "Bearer" prefix
  const jwtToken = token.replace("Bearer", "").trim();

  try {
    // Verify the token using the secret key
    const isVerified = jwt.verify(jwtToken, process.env.JWT_KEY);

    // Fetch the user data excluding the password field
    const userData = await User.findOne({
      email: isVerified.email,
    }).select({ password: 0 });

    // If no user is found, return an error
    if (!userData) {
      return res.status(401).json({ msg: "User not found" });
    }

    // Log the user data (for debugging, remove in production)
    console.log(userData);

    // Attach user data to the request object for further use
    req.user = userData;
    req.token = token;
    req.userID = userData._id;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Log the error and return an appropriate message
    console.error("Authentication error:", error.message);
    return res.status(401).json({ msg: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;
