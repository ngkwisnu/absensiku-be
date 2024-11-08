import { validateType, validateEmail } from "../../utils/validator.js";
import ErrorHandler from "../../utils/ErrorHandler.js";

const update_user_validation = ({
  number_id,
  password,
  email,
  name,
  internship_period,
  institution,
  address,
  contactNumber,
  description,
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

  if (!contactNumber) throw new ErrorHandler("contactNumber must be filled!");
  if (!validateType(contactNumber, "string"))
    throw new ErrorHandler("contactNumber must be string!");
  if (!institution) throw new ErrorHandler("institution must be filled!");
  if (!validateType(institution, "string"))
    throw new ErrorHandler("institution must be string");

  if (!internship_period)
    throw new ErrorHandler("internship_period must be filled!");
  if (!validateType(internship_period, "string"))
    throw new ErrorHandler("internship_period must be string!");
  if (!address) throw new ErrorHandler("address must be filled!");
  if (!validateType(address, "string"))
    throw new ErrorHandler("address must be string");
  if (!description) throw new ErrorHandler("description must be filled!");
  if (!validateType(description, "string"))
    throw new ErrorHandler("description must be string");
  const dataIsValid = {
    number_id,
    password,
    email,
    name,
    internship_period,
    institution,
    address,
    contactNumber,
    description,
    isActive,
  };
  return {
    getDataValid: () => dataIsValid,
  };
};

export default update_user_validation;
