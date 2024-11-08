import { signToken } from "../../utils/jwt.js";

const generate_token = (payload) => {
  const access_key = process.env.ACCESS_SECRET_KEY;
  const refresh_key = process.env.REFRESH_SECRET_KEY;
  const access_token = signToken(payload, access_key, "1d");
  const refresh_token = signToken(payload, refresh_key, "7d");
  return {
    access_token,
    refresh_token,
  };
};

export default generate_token;
