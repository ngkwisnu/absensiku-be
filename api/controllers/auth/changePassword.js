const change_password_function =
  (change_password_case_func, createResponse) => async (req, res) => {
    const result = await change_password_case_func(req.body);
    return createResponse(result);
  };

export default change_password_function;
