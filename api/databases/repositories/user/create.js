import User from "../../models/user.model.js";

const create_user_repository_func = async (data) => {
  const createDataUser = await User.create(data);
  return createDataUser;
};

export default create_user_repository_func;
