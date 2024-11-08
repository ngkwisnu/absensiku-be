import Attendance from "../../models/attendance.model.js";

const attendance_by_user_id_repository_func = async ({ userId }) => {
  console.log(userId);
  const detailAttendance = await Attendance.find({ userId: userId });
  console.log(detailAttendance);
  return detailAttendance;
};

export default attendance_by_user_id_repository_func;
