const {User} = require('../../entities/index')
const MakeRulesRunner = require('../../core/business/rules-runner')



function MakeAddUser({makeUserDb}) {
    return async function addUser(userInfo) {
        const user = await User(userInfo)
        const ruleRunners=MakeRulesRunner(await IfUserExists(user.getEmail()))  
        if(ruleRunners===null){
           return await makeUserDb.Insert({
               UserName:user.getUserName(),
               Password:user.getPassword(),
               Email:user.getEmail()
           })       
        }
    }

    async function IfUserExists(email){
        const exists=await makeUserDb.GetByEmail({email})
        if(exists.length>0){
            throw new Error('User is already exists')
        }   
    }
}






module.exports = MakeAddUser