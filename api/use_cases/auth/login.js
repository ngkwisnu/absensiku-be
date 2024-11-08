import login_user_validation from "../../validations/auth/login.js";
import makeUserDb from "../../databases/repositories/user/index.js";
import { comparePassword } from "../../utils/bcrypt.js";
import ErrorHandler from "../../utils/ErrorHandler.js";
import generate_token from "../../services/auth/generateToken.js";

const login_user_case_func = async ({ number_id, password }) => {
  try {
    const userModel = makeUserDb();
    const { getLoginValidate } = login_user_validation({ number_id, password });
    const validateLoginData = getLoginValidate();
    const userData = await userModel.get_user_by_number_id_repository_func({
      number_id: validateLoginData.number_id,
    });
    if (!userData) throw new ErrorHandler("Data user not found!");
    const passwordIsMatch = comparePassword(password, userData.password);
    if (!passwordIsMatch) throw new ErrorHandler("Password is not match!");
    const token = generate_token({
      id: userData._id,
      number_id: userData.number_id,
      email: userData.email,
    });
    return token;
  } catch (error) {
    console.log(error);
  }
};

export default login_user_case_func;
