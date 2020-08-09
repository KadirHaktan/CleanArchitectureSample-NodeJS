
function MakeGetByID({makeUserDb}) {
    return async function getAllUser(id) { 
        return await makeUserDb.GetById(id)
    }   
}

module.exports=MakeGetByID