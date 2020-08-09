const {headers}=require('../../config/config')

function DeleteProductController({deleteProduct}){
    
    return async function handle(httpRequest){
        
        const {params}=httpRequest
        const {id}=params

        await deleteProduct(id)
        return{
            headers,
            statusCode:200,
            body:{
                message:'Deleting successed'
            }     
        }
    }
}

module.exports=DeleteProductController