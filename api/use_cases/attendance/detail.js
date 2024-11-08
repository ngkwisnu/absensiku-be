import makeAttendanceDb from "../../databases/repositories/attendance/index.js";

const detail_attendance_case_func = async ({ id }) => {
  const AttendanceModel = makeAttendanceDb();
  const response = await AttendanceModel.attendance_by_id_repository_func({
    id,
  });
  return response;
};

export default detail_attendance_case_func;
