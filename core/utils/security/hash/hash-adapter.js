

function HashAdapter({hash,generateSalt}){
    return async function handle(property,saltNumber){
        const salt=await generateSalt(saltNumber)
        return await hash(property,salt)
    }
    
    
}

module.exports=HashAdapter