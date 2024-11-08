import User from "../../models/user.model.js";

const get_user_by_email_repository_func = async ({ email }) => {
  const user = await User.findOne({ email: email });
  return user;
};

export default get_user_by_email_repository_func;
