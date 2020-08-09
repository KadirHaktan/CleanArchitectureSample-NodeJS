
const {headers}=require('../../config/config')

function AddUserWithMultiRolesController({makeAddUserWithMultiRoles}){
    
    return async function handle(httpRequest){
        
        const {body}=httpRequest

        const {userInfo,roles}=body

        
        
        const result=await makeAddUserWithMultiRoles({userInfo,roles})
        return{
            headers,
            statusCode:200,
            body:{
                message:result
            }
        }
    }
}

module.exports=AddUserWithMultiRolesController