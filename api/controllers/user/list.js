const list_user_func = (list_user_case_func, response) => async (req, res) => {
  const list_user = await list_user_case_func(req);
  return response(list_user);
};

export default list_user_func;
