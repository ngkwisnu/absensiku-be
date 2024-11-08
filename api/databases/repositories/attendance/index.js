import create_attendance_repository_func from "./create.js";
import list_attendance_repository_func from "./list.js";
import attendance_by_id_repository_func from "./byId.js";
import remove_attendance_repository_func from "./remove.js";
import get_attendance_by_ip_repository_func from "./byDeviceId.js";
import attendance_checkout_repository_func from "./checkOut.js";
import change_status_attendance_repository_func from "./changeStatus.js";
import attendance_by_user_id_repository_func from "./byUserId.js";

export default function makeAttendanceDb() {
  return Object.freeze({
    create_attendance_repository_func,
    list_attendance_repository_func,
    attendance_by_id_repository_func,
    remove_attendance_repository_func,
    get_attendance_by_ip_repository_func,
    attendance_checkout_repository_func,
    change_status_attendance_repository_func,
    attendance_by_user_id_repository_func,
  });
}
