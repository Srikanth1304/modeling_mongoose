import mangoose from "mongoose";
const hosptialSchema=new mongoose.Schema({
    hospitalName:{
      type:String,
      requried:true
    },
    address:{
      type:String,
      requried:true
    },
    specialisation:{
      type:String,
      requried:true,
      deafault:All
    }
},{timestamps:true});
export const Hospital=mongoose.model("Hospital",hospitalSchema);