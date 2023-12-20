import mongoose from 'mongoose';
const orderItemsSchema=new mongoose.Schema({
    productId:{
      type:mongoose.Schema.Type.ObjectId,
      ref='Product'
    },
    quantity:{
      type:Number,
      requried:true
    }
})

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      requried: true,
    },
    customer: {
      type: mongoose.Schema.Type.ObjectId,
      ref: 'User',
    },
    orderItems: {
      type: [orderItemsSchema]
    },
    address:{
      type:String,
      requried:true
    },
    status:{
      type:String,
      enum:['Pending','Cancelled','Delivered'],
      default:'Pending'
    }
  },
  { timestamps: true }
);
export const Order = mongoose.model('Order', orderSchema);
