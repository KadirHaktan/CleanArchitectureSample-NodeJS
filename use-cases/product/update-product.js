

const {NotFoundError}=require('../../core/utils/errors/index')
const MakeRulesRunner = require('../../core/business/rules-runner')



function MakeUpdateProduct({makeProductDb}) {
    return async function updateProduct(id,body) {
        const ruleRunners=MakeRulesRunner(await IfProductExistsById(id))

        if(ruleRunners===null){
            return await makeProductDb.Update(id,body)
        }
    }

    async function IfProductExistsById(id){
        const exists=await makeProductDb.GetById(id)
        if(exists.length===0){
            throw new NotFoundError('Updating product can not be founded')
        }   
    }
}

module.exports = MakeUpdateProduct