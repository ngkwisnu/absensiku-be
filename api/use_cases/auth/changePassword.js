import makeUserDb from "../../databases/repositories/user/index.js";
import isUserRegistered from "../../services/user/isUserRegistered.js";
import { hashPassword } from "../../utils/bcrypt.js";
import ErrorHandler from "../../utils/ErrorHandler.js";

const change_password_case_func = async ({ email, password }) => {
  try {
    const UserModel = makeUserDb();
    const getAccount = await UserModel.get_user_by_email_repository_func({
      email,
    });
    password = hashPassword(password);
    getAccount.password = password;
    await getAccount.save();
    return getAccount;
  } catch (error) {
    console.log(error);
  }
};

export default change_password_case_func;
