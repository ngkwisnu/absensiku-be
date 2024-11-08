const get_by_id_function =
  (get_by_id_case_func, createResponse) => async (req, res) => {
    const result = await get_by_id_case_func(req.params);
    return createResponse(result);
  };

export default get_by_id_function;
