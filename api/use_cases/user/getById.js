import makeUserDb from "../../databases/repositories/user/index.js";
import ErrorHandler from "../../utils/ErrorHandler.js";
import { validateId } from "../../utils/validator.js";

const get_by_id_case_func = async ({ id }) => {
  if (!validateId(id)) throw new ErrorHandler("id is not validate!");
  const userModel = makeUserDb();
  const detailUser = await userModel.get_user_by_id_repository_func({ id });
  if (!detailUser) throw new ErrorHandler("User is not defined!");
  return detailUser;
};

export default get_by_id_case_func;
