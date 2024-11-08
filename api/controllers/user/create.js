const create_user_function =
  (create_user_case_func, createResponse) => async (req, res) => {
    const result = await create_user_case_func(req.body);
    return createResponse(result);
  };

export default create_user_function;
