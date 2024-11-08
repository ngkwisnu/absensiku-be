import Attendance from "../../models/attendance.model.js";

const attendance_by_id_repository_func = async ({ id }) => {
  const detailAttendance = await Attendance.findOne({ _id: id });
  console.log(detailAttendance);
  return detailAttendance;
};

export default attendance_by_id_repository_func;
