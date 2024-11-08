import bcrypt from "bcrypt";

const hashPassword = (password) => {
  const salt = 10;
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

export { hashPassword, comparePassword };
