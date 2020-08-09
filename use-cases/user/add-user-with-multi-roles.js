const {
    User
} = require('../../entities/index')
const MakeRulesRunner = require('../../core/business/rules-runner')




function MakeAddUserWithMultiRoles({makeUserDb,makeRoleDb,makeUserRoleDb}) {
    return async function addUserWithSingleRole({userInfo,roles}) {
        const user = await User(userInfo)
        const ruleRunners = MakeRulesRunner(await IfUserExists(user.getEmail()))
        if (ruleRunners === null) {

            const {insertId} = await InsertToUser({
                UserName: user.getUserName(),
                Password: user.getPassword(),
                Email: user.getEmail()
            })

            const roleIds= await GetRoleIdByName(roles)
            let {message} = await InsertToUserRole(insertId,roleIds)

            message="Success add to user and roles"
        
            return message



        }
    }


    async function InsertToUser({UserName,Password,Email}) {
        return await makeUserDb.Insert({
            UserName,
            Password,
            Email
        })
    }

    async function GetRoleIdByName(roles) {
        let roleIds = []
        for(let i=0;i<roles.length;i++){
            let RoleName=roles[i]

            let roleResult=await makeRoleDb.GetByName({RoleName})
            
            let roleId=roleResult[0].Id
            roleIds[i]=roleId
        }

        return roleIds

        

        
    }

    async function InsertToUserRole(UserId,roleIds) {
       let results=[];
       
       roleIds.forEach(async(RoleId)=>{
           results.push(await makeUserRoleDb.Insert({RoleId,UserId}))
       })

       return results
       
    }


    async function IfUserExists(email) {
        const exists = await makeUserDb.GetByEmail({
            email
        })
        if (exists.length > 0) {
            throw new Error('User is already exists')
        }
    }
}






module.exports = MakeAddUserWithMultiRoles