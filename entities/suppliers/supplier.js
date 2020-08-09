


function BuildMakeSupplier({Validate}) {
    return function makeSupplier({
        SupplierID,
        CompanyName,
        ContactName,
        ContactTitle,
        Address,
        City,
        Phone
    } = {}) {
        
        Validate.IsValid(CompanyName,ContactName,ContactTitle,Address,City,Phone)
        .HasLength(CompanyName,10)
        .HasLength(ContactName,10)
        .HasLength(ContactTitle,10)

            
        return Object.freeze({
           getSupplierID:()=>SupplierID,
           getCompanyName:()=>CompanyName,
           getContactName:()=>ContactName,
           getContactTitle:()=>ContactTitle,
           getAddress:()=>Address,
           getCity:()=>City,
           getPhone:()=>Phone
        })

    }
}


module.exports = BuildMakeSupplier