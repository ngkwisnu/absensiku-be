import ErrorHandler from "../../utils/ErrorHandler.js";
import { validateType, validateId } from "../../utils/validator.js";

const attendance_data_validation = async ({
  userId,
  status,
  notes,
  fileUrl,
}) => {
  if (!userId) throw new ErrorHandler("userId must be filled!");
  if (!validateId(userId))
    throw new ErrorHandler("user id is not valid mongoose id!");
  if (!status) throw new ErrorHandler("status must be filled!");
  if (!validateType(status, "string"))
    throw new ErrorHandler("status must be string!");
  if (!notes) throw new ErrorHandler("notes must be filled!");
  if (!validateType(notes, "string"))
    throw new ErrorHandler("status must be string!");
  if (!fileUrl) throw new ErrorHandler("fileUrl must be filled!");
  if (!validateType(fileUrl, "string"))
    throw new ErrorHandler("fileUrl must be string!");
  const dataIsValid = {
    userId,
    status,
    notes,
    fileUrl,
  };
  return {
    getValidDataAttendance: () => dataIsValid,
  };
};

export default attendance_data_validation;
