const {Product} = require('../../entities/index')
const MakeRulesRunner = require('../../core/business/rules-runner')



function MakeAddProduct({makeProductDb}) {
    return async function addProduct(productInfo) {
        const product = Product(productInfo)
        const ruleRunners=MakeRulesRunner(await IfProductExists(product.getProductName()))

       

        if(ruleRunners===null){
            return await makeProductDb.Insert({
                ProductName: product.getProductName(),
                SupplierID: product.getSupplierID(),
                CategoryID: product.getCategoryID(),
                QuantityPerUnit: product.getQuantityPerUnit(),
                UnitPrice: product.getUnitPrice(),
                UnitsInStock: product.getUnitsInStock(),
                UnitsOnOrder: product.getUnitsOnOrder()
            })
        }
    }

    async function IfProductExists(ProductName){
        const exists=await makeProductDb.GetIdByName({ProductName})
        if(exists.length>0){
            throw new Error('Product is already exists')
        }   
    }
}

module.exports = MakeAddProduct