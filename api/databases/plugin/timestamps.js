const timestamps = (schema) => {
  schema.pre("save", function (next) {
    const now = new Date();
    this.updatedAt = now;
    if (!this.createdAt) {
      this.createdAt = now;
    }
    next();
  });
};

export default timestamps;
