import makeAttendanceDb from "../../databases/repositories/attendance/index.js";

const list_attendance_case_func = async ({ query }) => {
  const AttendanceModel = makeAttendanceDb();
  const response = await AttendanceModel.list_attendance_repository_func({
    query,
  });
  return response;
};

export default list_attendance_case_func;
