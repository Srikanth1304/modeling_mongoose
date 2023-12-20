import mongoose from 'mangoose';


const userSchema = new mongoose.Schema(
  {
    //username:String                 direct notations
    username: {
      type: String, //validations,castings
      requried: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      requried: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      requried: [true, 'password is must'],
      unique: true,
    },
  },
  { timestamps: true }
);



export const User = mongoose.model('User', userSchema);
