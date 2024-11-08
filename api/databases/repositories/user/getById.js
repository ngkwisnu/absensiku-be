import User from "../../models/user.model.js";

const get_user_by_id_repository_func = async ({ id }) => {
  const user_detail = await User.findOne({ _id: id });
  return user_detail;
};

export default get_user_by_id_repository_func;
