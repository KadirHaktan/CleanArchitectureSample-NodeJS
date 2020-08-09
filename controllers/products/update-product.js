const {headers}=require('../../config/config')

function UpdateProductController({updateProduct}){
    
    return async function handle(httpRequest){
        
        const {body,params}=httpRequest
        const {id}=params

        await updateProduct(id,body)
        return{
            headers,
            statusCode:200,
            body:{
                message:'Success Update'
            }
        }
    }
}

module.exports=UpdateProductController