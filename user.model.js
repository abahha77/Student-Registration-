const mongoose=require('mongoose');
const schema=mongoose.Schema({
    name:String,
    email:String,
    password:String,
    age:Number,
    phone:Number,
},
{
    timestamp:true,
});
const userModel=mongoose.model('user',schema);
module.exports=userModel;