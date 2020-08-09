


function BuildMakeOrder({Validate}) {
    return function makeOrder({
        OrderID,
        CustomerID,
        EmployeeID,
        OrderDate,
        RequiredDate,
        ShippedDate,
        ShipVia,
        Freight,
        ShipName,
        ShipAddress,
        ShipCity
    } = {}) {

        Validate.IsValid(CustomerID,EmployeeID,OrderDate,RequiredDate,ShippedDate,ShipVia,Freight,ShipName,ShipAddress,ShipCity)
        
            
        return Object.freeze({
            getOrderID:()=>OrderID,
            getCustomerID:()=>CustomerID,
            getEmployeeID:()=>EmployeeID,
            getOrderDate:()=>OrderDate,
            getRequiredDate:()=>RequiredDate,
            getShippedDate:()=>ShippedDate,
            getShipVia:()=>ShipVia,
            getFreight:()=>Freight,
            getShipName:()=>ShipName,
            getShipAddress:()=>ShipAddress,
            getShipCity:()=>ShipCity

        })

    }
}


module.exports = BuildMakeOrder