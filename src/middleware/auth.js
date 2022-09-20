import jsonwebtoken from "jsonwebtoken";

//  middleware function to check if user has jtw to allow access to api
const authToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token === null) return res.sendStatus(401);

  jsonwebtoken.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403).send("Access denied");
    }
    req.user = user;
    next();
  });
};

export default authToken;
