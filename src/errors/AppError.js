class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = statusCode > 400 && statusCode < 500 ? "fail" : "error";
   
    Error.captureStackTrace(this, this.constructor); //Still need to understand the purpose and working of this function.
  }
}

module.exports = AppError;
