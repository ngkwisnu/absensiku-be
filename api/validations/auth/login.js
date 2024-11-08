import ErrorHandler from "../../utils/ErrorHandler.js";
import { validateType } from "../../utils/validator.js";

const login_user_validation = ({ number_id, password }) => {
  if (!number_id) throw new ErrorHandler("number_id must be filled!");
  if (!validateType(number_id, "string"))
    throw new ErrorHandler("number_id must be string!");
  if (!password) throw new ErrorHandler("Password must be filled!");
  if (!validateType(password, "string"))
    throw new ErrorHandler("Password must be string!");
  const dataIsValidate = {
    number_id,
    password,
  };
  return {
    getLoginValidate: () => dataIsValidate,
  };
};

export default login_user_validation;
