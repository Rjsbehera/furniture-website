let checkToken=(req,res,next)=>{
    if(req.query.token=="" || req.query.token==undefined || req.query.token==null){
        return res.send(
            {
                status:false,
                msg:"please fill the token"
            }
        )
    }
    if(req.query.token!=process.env.TOKEN){
         return res.send(
            {
                status:false,
                msg:"please fill the correct token"
            }
        )
    }
    next();
}

module.exports=checkToken