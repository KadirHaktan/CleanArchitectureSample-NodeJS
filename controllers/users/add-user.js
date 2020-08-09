
const {headers}=require('../../config/config')

function AddUserController({makeAddUserWithSingleRole}){
    
    return async function handle(httpRequest){
        
        const {body}=httpRequest

        const {RoleName,userInfo}=body

        
        const result=await makeAddUserWithSingleRole({userInfo,RoleName})
        return{
            headers,
            statusCode:200,
            body:{
                message:result
            }
        }
    }
}

module.exports=AddUserController