

const {NotFoundError}=require('../../core/utils/errors/index')
const MakeRulesRunner = require('../../core/business/rules-runner')



function MakeDeleteUser({makeUserDb}) {
    return async function deleteUser(id) {
        const ruleRunners=MakeRulesRunner(await IfUserExistsById(id))

        if(ruleRunners===null){
            return await makeUserDb.Remove(id)
        }
    }

    async function IfUserExistsById(id){
        const exists=await makeUserDb.GetById(id)
        if(exists.length===0){
            throw new NotFoundError('Deleting user can not be founded')
        }   
    }
}

module.exports = MakeDeleteUser