const {User} = require('../../entities/index')
const MakeRulesRunner = require('../../core/business/rules-runner')




function MakeAddUserWithSingleRole({makeUserDb,makeRoleDb,makeUserRoleDb}) {
    return async function addUserWithSingleRole({userInfo,RoleName}) {
        const user = await User(userInfo)

        const ruleRunners=MakeRulesRunner(await IfUserExists(user.getEmail()))  
        if(ruleRunners===null){
        
        const {insertId}=await InsertToUser({
             UserName:user.getUserName(),
             Password:user.getPassword(),
             Email:user.getEmail()
         })

         const roles=await GetRoleIdByName(RoleName)
         const RoleId=roles[0].Id

         let {message}=await InsertToUserRole(RoleId,insertId)
         message="Success adding to role and user"
         return message

         

        }
    }


    async function InsertToUser({UserName,Password,Email}){
        return await makeUserDb.Insert({
            UserName,
            Password,
            Email
        })      
    }

    async function GetRoleIdByName(RoleName){
        return await makeRoleDb.GetByName({RoleName})   
    }

    async function InsertToUserRole(RoleId,UserId){
        return await makeUserRoleDb.Insert({RoleId,UserId})
    }


    async function IfUserExists(email){
        const exists=await makeUserDb.GetByEmail({email})
        if(exists.length>0){
            throw new Error('User is already exists')
        }   
    }
}






module.exports = MakeAddUserWithSingleRole