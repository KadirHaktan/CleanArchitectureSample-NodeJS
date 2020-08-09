let executeQuery=({database})=>async function(sql,...args){
    const {query}=database
    return query(sql,...args)
}

module.exports=executeQuery