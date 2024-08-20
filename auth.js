const jwt=require('jsonwebtoken');

module.exports.auth=(req,res,next)=>{
    const token=req.header('token');
jwt.verify(token, 'bahaa', function(err, decoded) {
    if(err)
    {
        res.json({message:"Webtoken error"});
    }
    else
    {
        req._id=decoded._id;
        next();
    }
  });
}