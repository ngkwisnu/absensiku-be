import ErrorHandler from "../../../utils/ErrorHandler.js";
import Attendance from "../../models/attendance.model.js";

const change_status_attendance_repository_func = async ({
  id,
  status,
  checkin,
  checkout,
  notes,
  fileUrl,
}) => {
  try {
    let updateFields;

    if (status === "Absent") {
      // Update untuk status Absent
      updateFields = {
        status: "Absent",
        notes: notes ?? "", // Pastikan notes tidak undefined
        fileUrl: fileUrl ?? "", // Pastikan fileUrl tidak undefined
      };
    } else {
      // Update untuk status Present
      if (!checkin || !checkout) {
        throw new ErrorHandler(
          "Check-in or check-out time is missing for Present status."
        );
      }

      updateFields = {
        status: "Present",
        notes: "", // Kosongkan jika status Present
        fileUrl: "",
      };
    }

    console.log(
      `Attempting to update attendance with id: ${id}, status: ${status}`
    ); // Debugging log

    const change = await Attendance.findOneAndUpdate(
      { _id: id },
      { $set: updateFields },
      { new: true } // Mengembalikan dokumen yang diupdate
    ).orFail(
      new ErrorHandler(`Failed to change attendance status to ${status}`)
    );

    console.log("Attendance updated successfully:", change); // Debugging log

    return change;
  } catch (error) {
    console.error("Error during attendance update:", error); // Log error lebih detail
    throw new ErrorHandler(error.message);
  }
};

export default change_status_attendance_repository_func;
