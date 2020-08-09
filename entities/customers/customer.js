


function BuildMakeCustomer({Validate}) {
    return function makeCustomer({
        CustomerID,
        CompanyName,
        ContactName,
        ContactTitle,
        Address,
        City,
        PostalCode,
        Phone
    } = {}) {
        
        Validate.IsValid(CompanyName,ContactName,ContactTitle,Address,City,Phone)
        .HasLength(CompanyName,10)
        .HasLength(ContactName,10)
        .HasLength(ContactTitle,10)

            
        return Object.freeze({
           getCustomerID:()=>CustomerID,
           getCompanyName:()=>CompanyName,
           getContactName:()=>ContactName,
           getContactTitle:()=>ContactTitle,
           getAddress:()=>Address,
           getCity:()=>City,
           getPostalCode:()=>PostalCode,
           getPhone:()=>Phone
        })

    }
}


module.exports = BuildMakeCustomer