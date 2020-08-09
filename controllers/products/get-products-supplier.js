
const {headers}=require('../../config/config')
const GetProductResponseHandler=require('../res/products/get-product-response-handler')

function GetProductSupplierController({getProductsSuppliers}){
    
    return async function handle(httpRequest){
        const {id}=httpRequest.params
        const products=GetProductResponseHandler(await getProductsSuppliers(id))

        return{
            headers,
            statusCode:200,
            body:{
                data:products(GetProduct)
            }
        }
    }


    function GetProduct(product) {
            const {
                ProductName,
                CategoryName,
                Description,
                CategoryID,
                SupplierID,
                CompanyName,
                ContactTitle,
                ContactName,
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
                unitsOnOrder:UnitsOnOrder,
                categoryInfo:{
                    id:CategoryID,
                    name:CategoryName,
                    description:Description
                },
                supplierInfo: {
                    id:SupplierID,
                    companyName:CompanyName,
                    contactName:ContactName,
                    title:ContactTitle
                }
            }       
        }
}

module.exports=GetProductSupplierController