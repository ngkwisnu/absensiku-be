const softDelete = (schema) => {
  schema.pre(["countDocuments", "find", "findOne"], function () {
    this.where({ deletedAt: null });
  });
};

export default softDelete;
