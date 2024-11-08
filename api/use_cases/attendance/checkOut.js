import makeAttendanceDb from "../../databases/repositories/attendance/index.js";
import ErrorHandler from "../../utils/ErrorHandler.js";

const check_out_attendance_case_func = async (req) => {
  try {
    const AttendanceModel = makeAttendanceDb();
    const checkout = await AttendanceModel.attendance_checkout_repository_func(
      req.params
    );
    console.log(checkout);
    return checkout;
  } catch (error) {
    throw new ErrorHandler(error.message);
  }
};

export default check_out_attendance_case_func;
