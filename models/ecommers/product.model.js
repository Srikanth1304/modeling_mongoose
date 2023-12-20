import mongoose from 'mongoose';
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      requried: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      requried: true,
    },
    productImage:{
      type:String, //image sent to cloud nari,that responds with url
    },
    price:{
      type:Number,
      default:0
    },
      stock:{
        type:Number,
        default:0
    },
    category:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Category",
      requried:true
    },
    owener:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    }
  },
  { timestamps: true }
);
export const Product = mongoose.model('Product', productSchema);
