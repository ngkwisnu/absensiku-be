import makeUserDb from "../../databases/repositories/user/index.js";

const list_user_case_func = async ({ query }) => {
  const UserModel = makeUserDb();
  const response = await UserModel.list_user_repository_func({ query });
  return response;
};

export default list_user_case_func;
