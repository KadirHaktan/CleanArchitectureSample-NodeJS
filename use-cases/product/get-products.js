

const {NotFoundError}=require('../../core/utils/errors/index')
function MakeGetProducts({makeProductDb}){
    return async function getProducts(id=null){
        
        if(!id){
            return await makeProductDb.GetAll()
        }

        return await ProductExists(id)
        
    }


    async function ProductExists(id){
        const product=await makeProductDb.GetById(id)
        if(product.length===0){
            throw new NotFoundError('Product can not be found')
        }
        return product
    }
}

module.exports=MakeGetProducts