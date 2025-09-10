const { sendErrorResponse } = require("../../helpers/send.error.response")
const jwtService = require("../../services/jwt.servuce")
module.exports= async(req, res, next)=>{
  try {
    // guard logic
    const authHeader = req.headers.authorization
    if(!authHeader){
      return sendErrorResponse({message: "auth header not found"}, res, 401);
    }
    console.log(authHeader);
    const bearer = authHeader.split(" ")[0];
    const token = authHeader.split(" ")[1];
    if(bearer !== "Bearer" || !token){
      return sendErrorResponse({message: "Token not found"})
    }
    //  decodedToken
    const verifiedAccessToken = await jwtService.verifyAccessToken(token);
    req.admin = verifiedAccessToken; //self guardda foydalanish uchun
    console.log(req);
    
    next();
  } catch (error) {
    sendErrorResponse(error, res, 403)
  }
};