const mongoose=require('mongoose');

const schema=mongoose.Schema({
    title:String,
    content:String,
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
});
const postModel=mongoose.model('post',schema);
module.exports=postModel;