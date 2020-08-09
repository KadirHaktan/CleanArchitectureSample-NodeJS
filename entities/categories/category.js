let{
    IsValid
} = require('../../core/validation/validate')


function BuildMakeCategory() {
    return function makeCategory({
        CategoryID,
        CategoryName,
        Description
    } = {}) {
        
        IsValid(CategoryName,Description)
        .HasLength(CategoryName,4)
        .HasLength(Description,10)

            
        return Object.freeze({
           getCategoryID:()=>CategoryID,
           getCategoryName:()=>CategoryName,
           getDescription:()=>Description
        })

    }
}


module.exports = BuildMakeCategory