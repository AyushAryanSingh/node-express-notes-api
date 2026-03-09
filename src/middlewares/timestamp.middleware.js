function timestamp(req,res,next){
    req.requestTime = new Date();

    next();
}

module.exports=timestamp;