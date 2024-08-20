const mongoose=require('mongoose');

const schema=mongoose.Schema({
    content:String,
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
});

const commentModel=mongoose.model('comment',schema);
module.exports=commentModel;