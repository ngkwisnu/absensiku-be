import mongoose from "mongoose";

import handleError from "../plugin/handleError.js";
import softDelete from "../plugin/softDelete.js";
import timestamps from "../plugin/timestamps.js";

const UserSchema = new mongoose.Schema({
  number_id: {
    type: String,
    required: [true, "Nomor Induk is required"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
  },
  internship_period: {
    type: String,
    default: null,
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
  },
  institution: {
    type: String,
    default: null,
    trim: true,
  },
  address: {
    type: String,
    default: null,
    trim: true,
  },
  contactNumber: {
    type: String,
    default: null,
    trim: true,
  },
  description: {
    type: String,
    defaut: null,
    trim: true,
  },
  image: {
    type: String,
    default: null,
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
});

UserSchema.plugin(timestamps);
// UserSchema.plugin(handleError);
UserSchema.plugin(softDelete);

const User = mongoose.model("master_users", UserSchema);

export default User;
