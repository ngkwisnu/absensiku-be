import User from "../../models/user.model.js";
import { pagination } from "../pagination.js";

const list_user_repository_func = async ({ query }) => {
  if (!query.name) {
    const data = await pagination({ query }, User);
    return data;
  }
  const { name } = query;
  return User.find({ name: { $regex: ".*" + name + ".*" } });
};

export default list_user_repository_func;
