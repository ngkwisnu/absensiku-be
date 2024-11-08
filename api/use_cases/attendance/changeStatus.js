import makeAttendanceDb from "../../databases/repositories/attendance/index.js";
import { getLocalTime } from "../../utils/localTime.js";

const change_status_attendance_case_func = async (req) => {
  const { status, notes } = req.body;
  let file = "";
  if (req.fileImage.image || req.fileImage.file) {
    file = req.fileImage.image || req.fileImage.file;
  }
  const attendance = {
    id: req.params.id,
    status,
    notes: notes ?? "",
    fileUrl: file !== "" ? file[0].filename : "",
    checkin: getLocalTime(),
    checkout: getLocalTime(),
  };

  console.log(attendance);

  const attendanceModel = makeAttendanceDb();
  const changeStatus =
    await attendanceModel.change_status_attendance_repository_func(attendance);
  return changeStatus;
};

export default change_status_attendance_case_func;
