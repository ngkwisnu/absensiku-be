import ErrorHandler from "../../utils/ErrorHandler.js";
import { validateId } from "../../utils/validator.js";
import makeUserDb from "../../databases/repositories/user/index.js";

const remove_user_case_func = async ({ id }) => {
  if (!validateId(id)) {
    throw new ErrorHandler("id is not valid!");
  }
  const UserModel = makeUserDb();
  const result = await UserModel.remove_user_repository_func({ id });
  return result;
};

export default remove_user_case_func;
