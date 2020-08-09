
function BuildMakeProduct({Validate}) {
    return function makeProduct({
        ProductID,
        ProductName,
        SupplierID,
        CategoryID,
        QuantityPerUnit,
        UnitPrice,
        UnitsInStock,
        UnitsOnOrder
    } = {}) {
        
        Validate.IsValid(ProductName,QuantityPerUnit, UnitPrice, UnitsInStock, UnitsOnOrder)
        .LessThanZero(UnitPrice)
        .HasLength(ProductName, 3)
        .HasLength(QuantityPerUnit, 7)

        

        

            
        return Object.freeze({
            getProductID:()=>ProductID,
            getProductName:()=>ProductName,
            getSupplierID:()=>SupplierID,
            getCategoryID:()=>CategoryID,
            getQuantityPerUnit:()=>QuantityPerUnit,
            getUnitPrice:()=>UnitPrice,
            getUnitsInStock:()=>UnitsInStock,
            getUnitsOnOrder:()=>UnitsOnOrder
        })

    }
}


module.exports = BuildMakeProduct