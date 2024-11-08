import Attendance from "../../models/attendance.model.js";

const remove_attendance_repository_func = async ({ id }) => {
  const removeAttendance = await Attendance.findOneAndUpdate(
    { _id: id },
    { $set: { deletedAt: new Date() } },
    { new: true }
  );
  return removeAttendance;
};

export default remove_attendance_repository_func;
