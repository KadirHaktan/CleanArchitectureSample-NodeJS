
const {headers}=require('../../config/config')

function AddProductController({addProduct}){
    
    return async function handle(httpRequest){
        
        const {body}=httpRequest
        await addProduct(body)
        return{
            headers,
            statusCode:200,
            body:{
                message:'Success Add'
            }
        }
    }
}

module.exports=AddProductController