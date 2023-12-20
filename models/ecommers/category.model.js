import mongoose from 'mongoose';
const categorySchema = new mongoose.Schema(
  {
    name: String,
    requried: true,
  },
  { timestamps: true }
);
export const Category = mongoose.model('Category', categorySchema);
