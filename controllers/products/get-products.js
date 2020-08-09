
const {headers}=require('../../config/config')

const GetProductResponseHandler=require('../res/products/get-product-response-handler')

function GetProductController({getProducts}){
    
    return async function handle(httpRequest){
        const {id}=httpRequest.params
        const products=GetProductResponseHandler(await getProducts(id))

        return{
            headers,
            statusCode:200,
            body:{
                data:products(GetProduct)
            }
        }
    }


    function GetProduct(product) {
        
            let {
                ProductName,
                UnitPrice,
                UnitsInStock,
                UnitsOnOrder,
                QuantityPerUnit

            } = product

            return {
                name:ProductName,
                quantityPerUnit:QuantityPerUnit,
                unitPrice:UnitPrice,
                unitsInStock:UnitsInStock,
                unitsOnOrder:UnitsOnOrder
               
            }        
    }
}

module.exports=GetProductController