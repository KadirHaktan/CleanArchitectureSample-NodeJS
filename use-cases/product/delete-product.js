

const {NotFoundError}=require('../../core/utils/errors/index')
const MakeRulesRunner = require('../../core/business/rules-runner')



function MakeDeleteProduct({makeProductDb}) {
    return async function deleteProduct(id) {
        const ruleRunners=MakeRulesRunner(await IfProductExistsById(id))

        if(ruleRunners===null){
            return await makeProductDb.Remove(id)
        }
    }

    async function IfProductExistsById(id){
        const exists=await makeProductDb.GetById(id)
        if(exists.length===0){
            throw new NotFoundError('Deleting product can not be founded')
        }   
    }
}

module.exports = MakeDeleteProduct