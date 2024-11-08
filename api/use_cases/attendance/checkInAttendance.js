import makeAttendanceDb from "../../databases/repositories/attendance/index.js";
import { getLocalTime } from "../../utils/localTime.js";
import attendance_data_validation from "../../validations/attendance/attendance.js";
import checkLateStatus from "../../services/attendance/checkLateStatus.js";
import checkingPosition from "../../services/attendance/checkingPosition.js";
import ErrorHandler from "../../utils/ErrorHandler.js";
import generateRandomString from "../../utils/randString.js";
import deviceAlreadyUsed from "../../services/attendance/deviceAlreadyUsed.js";

const check_in_attendance_case_func = async (req) => {
  console.log(req);
  const deviceId = await deviceAlreadyUsed(req.body);
  const checkingLocation = checkingPosition(req.body);
  if (!checkingLocation) throw new ErrorHandler("Tidak sesuai lokasi");
  const attendanceModel = makeAttendanceDb();
  const { status, notes } = req.body;
  let file = "";
  if (req.fileImage.image || req.fileImage.file) {
    file = req.fileImage.image || req.fileImage.file;
  }
  const attendanceData = {
    userId: req.user.id,
    status: status,
    notes: notes,
    fileUrl: file !== "" ? file[0].filename : "",
  };
  attendanceData.isLate = checkLateStatus();
  attendanceData.checkInTime = Date.now();
  attendanceData.deviceId = deviceId || "";
  // console.log(attendanceData);
  const checkInAttendance =
    await attendanceModel.create_attendance_repository_func({
      data: attendanceData,
    });
  console.log(checkInAttendance);
  return checkInAttendance;
};

export default check_in_attendance_case_func;
