


function BuildMakeEmployee({Validate}) {
    return function makeEmployee({
        EmployeeID,
        FirstName,
        LastName,
        Title,
        BirthDate,
        HireDate,
        City,
        HomePhone
    } = {}) {
        
        Validate.IsValid(FirstName,LastName,Title,BirthDate,HireDate,City,HomePhone)
        .HasLength(FirstName,3)
        .HasLength(LastName,3)
        .HasLength(Title,5)


            
        return Object.freeze({
           getEmployeeID:()=>EmployeeID,
           getFirstName:()=>FirstName,
           getLastName:()=>LastName,
           getTitle:()=>Title,
           getAddress:()=>Address,
           getBirthDate:()=>BirthDate,
           getHireDate:()=>HireDate,
           getCity:()=>City,
           getHomePhone:()=>HomePhone
        })

    }
}


module.exports = BuildMakeEmployee