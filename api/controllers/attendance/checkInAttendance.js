const check_in_attendance_function =
  (check_in_attendance_case_func, createResponse) => async (req, res) => {
    console.log(req.body);
    const result = await check_in_attendance_case_func(req);
    return createResponse(result);
  };

export default check_in_attendance_function;
