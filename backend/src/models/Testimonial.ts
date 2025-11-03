import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  authorName: { type: String, required: true },
  role: { type: String },
  text: { type: String, required: true },
  clientUrl: { type: String },
}, { timestamps: true });

export default mongoose.model("Testimonial", TestimonialSchema);