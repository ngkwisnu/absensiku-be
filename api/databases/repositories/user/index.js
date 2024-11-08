import list_user_repository_func from "./list.js";
import get_user_by_number_id_repository_func from "./getByNumberId.js";
import create_user_repository_func from "./create.js";
import get_user_by_id_repository_func from "./getById.js";
import remove_user_repository_func from "./remove.js";
import update_user_repository_func from "./update.js";
import get_user_by_email_repository_func from "./getByEmail.js";
import get_user_by_name_repository_func from "./getByName.js";

export default function makeUserDb() {
  return Object.freeze({
    list_user_repository_func,
    get_user_by_email_repository_func,
    get_user_by_number_id_repository_func,
    create_user_repository_func,
    get_user_by_id_repository_func,
    remove_user_repository_func,
    update_user_repository_func,
    get_user_by_name_repository_func,
  });
}
