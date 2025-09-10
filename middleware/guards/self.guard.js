const { sendErrorResponse } = require("../../helpers/send.error.response")
module.exports= async(req, res, next)=>{
  try {
    if(req.params.id != req.params.id && !req.admin.is_creator){
      return sendErrorResponse({
        message: "Faqat shaxsiy ma'lumotlarni ko'rish mumkin!"
      }, res, 403)
    }
    
    next();
  } catch (error) {
    sendErrorResponse(error, res, 403)
  }
};