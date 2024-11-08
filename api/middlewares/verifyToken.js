import { verifyToken } from "../utils/jwt.js";
import { errorResponse } from "../utils/response.js";

const protect = (req, res, next) => {
  if (
    !req.headers["authorization"] ||
    req.headers["authorization"] === null ||
    req.headers["authorization"] === undefined
  ) {
    return errorResponse({
      res,
      message: "please provided token or token not found!",
      statusCode: 401,
    });
  }
  const token = req.headers["authorization"].split(" ")[1];
  console.log(token);
  const secret = process.env.ACCESS_SECRET_KEY;
  try {
    const decoded = verifyToken(token, secret);
    req.user = decoded;
  } catch (error) {
    return errorResponse({
      res,
      message: `token is not valid or ${error.message}`,
      statusCode: 403,
    });
  }
  return next();
};

export default protect;
