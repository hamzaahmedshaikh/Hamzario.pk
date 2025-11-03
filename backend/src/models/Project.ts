import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }],
  tech: [{ type: String }],
  liveUrl: { type: String },
  repoUrl: { type: String },
  category: { type: String },
  featured: { type: Boolean, default: false },
  publishedAt: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model("Project", ProjectSchema);