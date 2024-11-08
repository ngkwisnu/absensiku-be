import { successResponse } from "../../utils/response.js";
import {
  check_in_attendance_case_func,
  check_out_attendance_case_func,
  list_attendance_case_func,
  detail_attendance_case_func,
  change_status_attendance_case_func,
  list_attendance_by_user_case_func,
} from "../../use_cases/attendance/index.js";
import check_in_attendance_function from "./checkInAttendance.js";
import check_out_attendance_function from "./checkOutAttendance.js";
import list_attendance_func from "./list.js";
import detail_attendance_func from "./detail.js";
import change_status_attendance_func from "./changeStatus.js";
import list_attendance_by_user_func from "./listByUser.js";

const create_attendance = check_in_attendance_function(
  check_in_attendance_case_func,
  successResponse
);

const checkout_attendance = check_out_attendance_function(
  check_out_attendance_case_func,
  successResponse
);

const list_attendance = list_attendance_func(
  list_attendance_case_func,
  successResponse
);

const detail_attendance = detail_attendance_func(
  detail_attendance_case_func,
  successResponse
);

const change_status = change_status_attendance_func(
  change_status_attendance_case_func,
  successResponse
);

const list_attendance_user = list_attendance_by_user_func(
  list_attendance_by_user_case_func,
  successResponse
);

export const attendance_controller = {
  create_attendance,
  checkout_attendance,
  list_attendance,
  detail_attendance,
  change_status,
  list_attendance_user,
};
