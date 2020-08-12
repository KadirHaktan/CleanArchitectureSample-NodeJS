

const {NotFoundError}=require('../../core/utils/errors/index')
function MakeGetProducts({makeProductDb,GetOrSet}){
    return async function getProducts(id=null){
        if(!id){
            return GetOrSet("allProducts",async()=>{
                return await makeProductDb.GetAll()
            })
        }

         return GetOrSet(id,async()=>{
             return await makeProductDb.GetById(id)
         })
        
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