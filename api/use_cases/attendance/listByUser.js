import makeAttendanceDb from "../../databases/repositories/attendance/index.js";

const list_attendance_by_user_case_func = async ({ params }) => {
  const AttendanceModel = makeAttendanceDb();
  const response = await AttendanceModel.attendance_by_user_id_repository_func({
    userId: params.id,
  });
  return response;
};

export default list_attendance_by_user_case_func;
