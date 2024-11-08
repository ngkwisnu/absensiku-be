import list_user_func from "./list.js";
import create_user_function from "./create.js";
import update_user_function from "./update.js";
import remove_user_function from "./remove.js";
import get_by_id_function from "./getById.js";

import {
  create_user_case_func,
  list_user_case_func,
  get_by_id_case_func,
  remove_user_case_func,
  update_user_case_func,
} from "../../use_cases/user/index.js";

import { successResponse } from "../../utils/response.js";

const list_user = list_user_func(list_user_case_func, successResponse);
const create_user = create_user_function(
  create_user_case_func,
  successResponse
);
const update_user = update_user_function(
  update_user_case_func,
  successResponse
);
const remove_user = remove_user_function(
  remove_user_case_func,
  successResponse
);
const detail_user = get_by_id_function(get_by_id_case_func, successResponse);

export const user_controller = {
  list_user,
  create_user,
  update_user,
  remove_user,
  detail_user,
};
