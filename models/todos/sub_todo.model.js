import mongoose from 'mongoose';
const subSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      requried: true,
    },
    complete: {
      type: boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps }
);
export const subTodo = mongoose.model('subTodo', 'subSchema');
