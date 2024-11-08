const login_user_function =
  (login_user_case_func, response) => async (req, res) => {
    const result_login = await login_user_case_func(req.body);
    return response(result_login, "Login Successfully!");
  };

export default login_user_function;
