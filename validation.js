const joi=require('joi');
const methods=['body','params'];
const schemas={
    body:joi.object({
        name:joi.string().required().max(10).min(3),
        email:joi.string().required().email(),
        password:joi.string().required().pattern(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/),
        age:joi.number().required().min(16).max(50)
    }),
    params:joi.object({
        id:joi.number()
    })
};

module.exports.validatetion=(req,res,next)=>{
    const errArray=[];
    methods.map((key)=>{
        const{error}=schemas[key].validate(req[key],{abortEarly:false});
        if(error){
        error.details.map((msg)=>{
            errArray.push(msg.message);
        })
    }
    })
    if(errArray.length>0)
    {
        res.json(errArray);
    }
    else
    {
        next();
    }
}


    const schema2=joi.object({
        email:joi.string().required().email(),
        password:joi.string().required().pattern(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/),
    });




module.exports.signInValidation=(req,res,next)=>{
    const errorArray=[];

    const{error}=schema2.validate(req.body,{abortEarly:false});
      if(error){
          error.details.map((msg)=>{
          errorArray.push(msg.message);
          });
        }

    if(errorArray.length>0)
    {
        res.json(errorArray)
    }
    else
    {
        next();
    }
}