import ErrorHandler from "../../utils/ErrorHandler.js";

const handleError = (schema) => {
  schema.post("save", function (err, doc, next) {
    if (err.code === 11000) {
      if (err.keyValue.nomor_induk) {
        return next(
          new ErrorHandler(
            "Username is already taken. Please choose a different one.",
            400
          )
        );
      }
      if (err.keyValue.email) {
        return next(
          new ErrorHandler("Email is available for registration.", 400)
        );
      }
    }
    next(err);
  });
};

export default handleError;
