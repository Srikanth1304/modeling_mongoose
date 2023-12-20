import mongoose from 'mongoose';
const patientSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      requried: true,
    },
    suffer: {
      type: String,
      requried: true,
    },
    age: {
      type: Number,
      requried: true,
    },
    gender: {
      type: String,
      enum: ['M', 'F', 'Others'],
      requried: true,
    },
    admittedIn: {
      type: mongoose.Scheme.Type.ObjectId,
      ref: 'Hospital',
    },
  },
  { timestamps: true }
);
export const Patient = mongoose.model('Patient', patientSchema);
