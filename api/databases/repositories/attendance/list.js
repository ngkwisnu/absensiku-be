import Attendance from "../../models/attendance.model.js";

const list_attendance_repository_func = async () => {
  const listAttendance = await Attendance.find({}).populate("userId");
  return listAttendance;
};

export default list_attendance_repository_func;
