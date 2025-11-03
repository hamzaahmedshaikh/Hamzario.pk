import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  firebaseUid: { type: String, required: true, unique: true },
  role: { type: String, default: "admin" },
  name: { type: String },
}, { timestamps: true });

export default mongoose.model("User", UserSchema);