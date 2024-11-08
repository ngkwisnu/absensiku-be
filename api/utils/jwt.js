import jwt from "jsonwebtoken";

const signToken = (payload, secret, expires) => {
  return jwt.sign(payload, secret, { expiresIn: expires });
};

const verifyToken = (token, secret) => {
  return jwt.verify(token, secret);
};

export { signToken, verifyToken };
