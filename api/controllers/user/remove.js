const remove_user_function =
  (remove_user_case_func, createResponse) => async (req, res) => {
    const result = await remove_user_case_func(req.params);
    return createResponse(result);
  };

export default remove_user_function;
