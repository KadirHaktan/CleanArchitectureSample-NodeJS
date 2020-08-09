
function MakeGetAllUser({makeUserDb}) {
    return async function getAllUser() { 
        return await makeUserDb.GetAll()
    }   
}

module.exports=MakeGetAllUser