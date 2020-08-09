
const {NotFoundError}=require('../../core/utils/errors/index')
const MakeRulesRunner = require('../../core/business/rules-runner')


function MakeUpdatedUser({makeUserDb}) {
    return async function updateUser(id,body) { 
        const ruleRunners=MakeRulesRunner(await IUserExistsById(id))
        if(ruleRunners===null){
          return await makeUserDb.Update(id,body)
        }
    }


    
    async function IUserExistsById(id){
        const exists=await makeUserDb.GetById(id)
        if(exists.length===0){
            throw new NotFoundError('Updating user can not be founded')
        }   
    }
}






module.exports = MakeUpdatedUser