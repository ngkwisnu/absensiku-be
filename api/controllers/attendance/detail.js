const detail_attendance_func =
  (detail_attendance_case_func, response) => async (req, res) => {
    const detail_attendance = await detail_attendance_case_func(req.params);
    return response(detail_attendance);
  };

export default detail_attendance_func;
