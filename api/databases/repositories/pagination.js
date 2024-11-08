export const pagination = async ({ query }, Model) => {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;
  const startIndex = (page - 1) * limit;
  const total = await Model.countDocuments();
  const list = await Model.find().skip(startIndex).limit(limit);

  return {
    page,
    limit,
    total,
    pages: Math.ceil(total / limit),
    data: list,
  };
};
