

function GetProductResponseHandler(products){
    return function IndentedFormatting(GetProductFunction){
        return products.map(product=>{    
            return GetProductFunction(product)
        })
    }
}

module.exports=GetProductResponseHandler
