let requestCount = 0;
function counter(req, res, next){
    requestCount++;
    console.log(`Request count: ${requestCount}`);
    next();
}

module.exports=counter;


