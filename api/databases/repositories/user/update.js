import User from "../../models/user.model.js";

const update_user_repository_func = async ({ id, data }) => {
  const dataUser = await User.findOne({ _id: id });
  Object.assign(dataUser, data);
  await dataUser.save();
  return dataUser;
};

export default update_user_repository_func;
