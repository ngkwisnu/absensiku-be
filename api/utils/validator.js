import { validate } from "email-validator";
import { isValidObjectId } from "mongoose";

const validateType = (field, type) => {
  if (type === "boolean") {
    try {
      return typeof JSON.parse(field) === "boolean";
    } catch (error) {
      return false;
    }
  }
  return typeof field === type && (field !== null || type !== "object");
};

const validateEmail = (email) => {
  return validate(email);
};

const validateId = (id) => {
  return isValidObjectId(id);
};

const validateArray = (array) => {
  return Array.isArray(array);
};

export { validateArray, validateType, validateEmail, validateId };
