

 function BuildMakeUser({Hash,Validate}) {
    return async function makeUser({
        Id,
        UserName,
        Email,
        Password
    } = {}) {
        
        Validate.IsValid(UserName,Email,Password)
        .HasLength(UserName,3)

        Validate.IsValidEmail(Email)
        .IsValidPassword(Password)

        const newPassword=await ReturnHashPassword(Password)


        
        return Object.freeze({
           getID:()=>Id,
           getUserName:()=>UserName,
           getEmail:()=>Email,
           getPassword:()=>newPassword
        })

    }


    async function ReturnHashPassword(Password){
        return Hash?await Hash(Password,10):Password
    }
}


module.exports = BuildMakeUser