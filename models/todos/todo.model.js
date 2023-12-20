import mongoose from 'mongooes';
const todoSchema = new mongoose.Schema(
  {
    content:{
      type:String,
      requried:true
      },
    complete:{
      type:boolean,
      default:false
    },
    createdBy:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    },
    subTodos:[
      {
      type:mongoose.Schema.Types.ObjectId,
      ref:'subTodo'
    }] //Array of sub todos


}, { timestamps: true });
export const Todo = mongoose.model('Todo', 'todoSchema');
