const change_status_attendance_func =
  (change_status_attendance_case_func, createResponse) => async (req, res) => {
    console.log(req);
    const result = await change_status_attendance_case_func(req);
    return createResponse(result);
  };

export default change_status_attendance_func;
