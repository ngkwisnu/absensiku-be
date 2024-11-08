import User from "../../models/user.model.js";

const get_user_by_name_repository_func = async ({ name }) => {
  const user = await User.findOne({ name: name });
  return user;
};

export default get_user_by_name_repository_func;
