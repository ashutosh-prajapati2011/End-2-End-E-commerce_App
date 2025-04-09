const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
  const token = req.headers.token;
  if (!token) return res.status(401).json("Access Denied");

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json("Invalid Token");
    if (user.role !== "admin") return res.status(403).json("Admin Only");
    req.user = user;
    next();
  });
};

module.exports = verifyAdmin;
