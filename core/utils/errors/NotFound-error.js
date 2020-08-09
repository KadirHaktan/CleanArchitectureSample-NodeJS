

class NotFoundError extends Error{
    constructor(message,statusCode=404){
        super(message)

        if(Error.captureStackTrace){
            Error.captureStackTrace(this,NotFoundError)
        }
    }
}

module.exports=NotFoundError