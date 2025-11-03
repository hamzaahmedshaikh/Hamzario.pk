import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logoUrl: { type: String, required: true },
  websiteUrl: { type: String, required: true },
  description: { type: String },
  brandColors: {
    primary: { type: String },
    secondary: { type: String },
  },
}, { timestamps: true });

export default mongoose.model("Client", ClientSchema);