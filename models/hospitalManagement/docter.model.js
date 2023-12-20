import mongoose from 'mongoose';
const doctorSchema = new mongoose.Schema(
  {
    doc_name: {
      type: String,
      requried: true,
    },
    specialistOn: {
      type: String,
    },
    experience: {
      type: Number,
    },
    workingAt: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);
export const Doctor = mongoose.model('Doctor', doctorSchema);
