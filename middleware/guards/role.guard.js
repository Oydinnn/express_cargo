const { sendErrorResponse } = require("../../helpers/send.error.response")
module.exports= (requiredRoles = [])=>{
  return async(req, res, next)=>{
  try {
    req.admin.role
    next();
  } catch (error) {
    sendErrorResponse(error, res, 403)
  }
}

};