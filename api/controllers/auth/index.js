import {
  login_user_case_func,
  change_password_case_func,
} from "../../use_cases/auth/index.js";
import { successResponse } from "../../utils/response.js";
import login_user_function from "./login.js";
import change_password_function from "./changePassword.js";

const login_user = login_user_function(login_user_case_func, successResponse);
const change_password = change_password_function(
  change_password_case_func,
  successResponse
);

export const auth_controller = {
  login_user,
  change_password,
};
