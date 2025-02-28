import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  try {
    // req.header() gets HTTP headers from the request
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      return res.status(401).json({
        message: "No Authorization header found. Please authenticate.",
      });
    }

    // auth header format is "Bearer <token>", so remove "Bearer " to get just the token
    const token = authHeader.replace("Bearer ", "");

    // verify that the token is valid using our secret key
    // if valid, decoded will contain the data we stored in the token (userId)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // add the decoded user info (userId) to the request object
    // so that other middleware/routes can access it
    req.user = decoded;

    // continue to the next middleware or route handler
    next();
  } catch (error) {
    // if token invalid or missing, send error
    res.status(401).json({ message: "Please authenticate." });
  }
};

// // when a user logs in successfully
// const handleLogin = (response) => {
//   // store the token
//   localStorage.setItem("token", response.token);
//   // and user into if needed?
//   localStorage.setItem("user", JSON.stringify(response.user));
// };
