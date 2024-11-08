const update_user_function =
  (update_user_case_func, createResponse) => async (req, res) => {
    try {
      const {
        params: { id },
        fileImage: { image },
        body,
      } = req;
      const result = await update_user_case_func({
        id,
        data: body,
        image: image ? image[0] : body,
      });
      return createResponse(result);
    } catch (error) {
      console.log(error);
    }
  };

export default update_user_function;
