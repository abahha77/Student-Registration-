const userModel=require('../Models/user.model.js');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');


module.exports.signin=async(req,res,next)=>{
    const{email,password}=req.body;
    const users=await userModel.findOne({email});
    if(users)
    {
        const match=bcrypt.compare(password,users.password);
        if(match)
        {
            jwt.sign({ _id:users._id,email:users.email,password:users.password,age:users.age }, 'bahaa', function(err, token) {
                res.json({message:"Signed In",token});
              });
        }
        else
        {
            res.json({message:"password Incorrect"});
        }
    }
    else
    {
        res.json({message:"Email Is Not Exists"});
    }
};


module.exports.signup=async(req,res,next)=>{
    const{name,email,password,age}=req.body;
    const users=await userModel.findOne({email});
    if(users)
    {
        res.json({message:"Email Already Exists"});
    }
    else
    {
        bcrypt.hash(password,5, async function(err, hash) {
            await userModel.insertMany({name,email,password:hash,age});
        });
        res.json({message:"Signed Up Successfully"});
    }
};


module.exports.changePassword=async(req,res,next)=>{
    const {newPassword}=req.body;
    bcrypt.hash(newPassword,5,async function(err,hash){
     await userModel.findByIdAndUpdate({_id:req._id},{password:hash});
    })

    res.json({message:"updated"});
};

module.exports.updateAccount=async(req,res,next)=>{
    const{name,email,age}=req.body;
    await userModel.findByIdAndUpdate({_id:req._id},{name:name,age:age});
    res.json({message:"Updated"});
};

module.exports.deleteAccount=async(req,res,next)=>{
    await userModel.findByIdAndDelete({_id:req._id});
    res.json({message:"Deleted"});
};