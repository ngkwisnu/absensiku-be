import { create_user_validation } from "../../validations/user/index.js";
import makeUserDb from "../../databases/repositories/user/index.js";
import { hashPassword } from "../../utils/bcrypt.js";
import ErrorHandler from "../../utils/ErrorHandler.js";
import isUserRegistered from "../../services/user/isUserRegistered.js";
import { image_url } from "../../databases/dummy/data.js";

const create_user_case_func = async (data) => {
  const UserModel = makeUserDb();
  const { getDataValid } = create_user_validation(data);
  const validateDataUser = getDataValid();
  const userIsExits = await isUserRegistered(validateDataUser);
  if (userIsExits) {
    throw new ErrorHandler("User has registered. please using any account!");
  }
  validateDataUser.password = hashPassword(validateDataUser.password);
  const user = {
    image: validateDataUser.image || image_url,
    description: validateDataUser.description || "Tidak ada deskripsi tersedia",
    ...validateDataUser,
  };
  const createDataUser = await UserModel.create_user_repository_func(user);
  if (!createDataUser) {
    throw new ErrorHandler("Error when creating data user!");
  }
  return createDataUser;
};

export default create_user_case_func;
