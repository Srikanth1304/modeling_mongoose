import mangoose from 'mangoose';
const recordSchema = new mangoose.Schema({
  patientId:{
    type:Number,
    requried:true,
    unique:true
  },
  patient_name:{
    type:String,
    requried:true,
    unique:true
  },
  sufferFrom:{
    disease:string,
    requried:true,
  },
  remarks:{
    type:String,
    requried:true
  }
},{timestamps:true});
export const Record = mongoose.model('Record', recordSchema);
