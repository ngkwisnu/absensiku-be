import multer from "multer";
import { errorResponse } from "../utils/response.js";

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/files");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const filename = file.fieldname + "-" + uniqueSuffix + file.originalname;
      cb(null, filename);
    },
  }),
  fileFilter: (req, file, cb) => {
    // filter mimetype
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "application/pdf" ||
      file.mimetype ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.mimetype ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      cb(null, true);
    } else {
      cb(
        new Error(
          "extension file only can .jpg, .jpeg, .pdf, .docx, .xlsx, and .png"
        ),
        false
      );
    }
  },
});

export default (req, res, next) => {
  const uploadFile = upload.fields([
    { name: "file", maxCount: 1 },
    { name: "image", maxCount: 1 },
  ]);

  uploadFile(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.log(err.message);
      return res.json({
        status: 400,
        message: err.message,
      });
    } else if (err) {
      console.log(err.message);
      return res.json({
        status: 400,
        message: err.message,
      });
    } else {
      console.log("object");
      return next();
    }
  });
};
