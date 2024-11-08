import makeUserDb from "../../databases/repositories/user/index.js";

const isUserRegistered = async ({ number_id, email }) => {
  const userModel = makeUserDb();
  const userNumberId = await userModel.get_user_by_number_id_repository_func({
    number_id,
  });
  const userEmail = await userModel.get_user_by_email_repository_func({
    email,
  });
  if (userEmail || userNumberId) {
    return true;
  } else {
    return false;
  }
};

export default isUserRegistered;
