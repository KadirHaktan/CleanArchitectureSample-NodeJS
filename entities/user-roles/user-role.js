

 function BuildMakeUser() {
    return async function makeUserRole({
        UserId,
        RoleId    
    } = {}) {    
        return Object.freeze({
           getUserId:()=>UserId,
           getRoleId:()=>RoleId
           
        })

    }
}


module.exports = BuildMakeUser