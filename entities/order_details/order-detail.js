
function BuildMakeOrderDetail({Validate}) {
    return function makeOrderDetail({
        OrderID,
        ProductID,
        UnitPrice,
        Quantity,
        Discount
    } = {}) {

        Validate.IsValid(OrderID,ProductID,UnitPrice,Quantity,Discount)
        .LessThanZero(UnitPrice)
        .LessThanZero(Quantity)
            
        return Object.freeze({
            getOrderID:()=>OrderID,
            getProductID:()=>ProductID,
            getUnitPrice:()=>UnitPrice,
            getQuantity:()=>Quantity,
            getDiscount:()=>Discount

        })

    }
}


module.exports = BuildMakeOrderDetail