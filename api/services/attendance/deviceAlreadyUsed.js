import makeAttendanceDb from "../../databases/repositories/attendance/index.js";
import ErrorHandler from "../../utils/ErrorHandler.js";

const deviceAlreadyUsed = async ({ deviceId }) => {
  const AttendanceModel = makeAttendanceDb();
  const attendance = await AttendanceModel.get_attendance_by_ip_repository_func(
    { ip: deviceId }
  );
  if (!attendance) {
    return deviceId;
  } else {
    throw new ErrorHandler("Device sudah digunakan!");
  }
};

export default deviceAlreadyUsed;
