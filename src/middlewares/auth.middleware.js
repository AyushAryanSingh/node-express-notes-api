function fakeAuth(req,res,next){
    const token = req.headers.authorization;

    if(!token){
        return res.status(401).send("Unauthorized");
    }

    next();
}

module.exports=fakeAuth;
