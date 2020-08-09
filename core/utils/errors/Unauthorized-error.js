

class UnauthorizedError extends Error{
    constructor(message,statusCode=401){
        super(message)

        if(Error.captureStackTrace){
            Error.captureStackTrace(this,UniqueConstraintError)
        }
    }
}

module.exports=UnauthorizedError