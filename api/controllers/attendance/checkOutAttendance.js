const check_out_attendance_function =
  (check_out_attendance_case_func, createResponse) => async (req, res) => {
    const result = await check_out_attendance_case_func(req);
    console.log(result);
    return createResponse(result);
  };

export default check_out_attendance_function;
