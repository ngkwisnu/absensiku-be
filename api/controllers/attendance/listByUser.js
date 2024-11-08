const list_attendance_by_user_func =
  (list_attendance_by_user_case_func, response) => async (req, res) => {
    const list_attendance = await list_attendance_by_user_case_func(req);
    return response(list_attendance);
  };

export default list_attendance_by_user_func;
