import User from "../../models/user.model.js";

const get_user_by_number_id_repository_func = async ({ number_id }) => {
  const user_detail = await User.findOne({ number_id: number_id });
  return user_detail;
};

export default get_user_by_number_id_repository_func;
