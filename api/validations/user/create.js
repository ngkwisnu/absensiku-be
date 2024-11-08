import { validateType, validateEmail } from "../../utils/validator.js";
import ErrorHandler from "../../utils/ErrorHandler.js";

const create_user_validation = ({
  number_id,
  password,
  email,
  name,
  isActive,
}) => {
  if (!number_id) throw new ErrorHandler("number_id must be filled!");
  if (!validateType(number_id, "string"))
    throw new ErrorHandler("number_id must be string!");
  if (!password) throw new ErrorHandler("password must be filled!");
  if (!validateType(password, "string"))
    throw new ErrorHandler("password must be string");
  if (!name) throw new ErrorHandler("name must be filled!");
  if (!validateType(name, "string"))
    throw new ErrorHandler("name must be string");
  if (!email) throw new ErrorHandler("email must be filled!");
  if (!validateEmail(email))
    throw new ErrorHandler("email is not valid format!");
  if (isActive === undefined)
    throw new ErrorHandler("isActive must be filled!");
  if (!validateType(isActive, "boolean"))
    throw new ErrorHandler("isActive must be boolean!");
  const dataIsValid = {
    number_id,
    password,
    email,
    name,
    isActive,
  };
  return {
    getDataValid: () => dataIsValid,
  };
};

export default create_user_validation;
