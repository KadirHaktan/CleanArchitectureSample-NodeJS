
function CachingManagerFactory({cache,seconds=3600}){


    return Object.freeze({
        Set,
        Get,
        GetOrSet,
        MultipleGet,
        MultipleSet,
        FlushAll,
        Delete,
        Close
    })


    function GetOrSet(key,storeFunction){
        const value=Get(key)

        console.log(cache.data)
        if(value){
            return Promise.resolve(value)
        }else{
            return storeFunction().then((result)=>{
                Set(key,result)
                return Promise.resolve(result)
            }).catch((error)=>{
                return Promise.reject(error)
            })
        }
       
    }

    function Set(key,val){
        return cache.set(key,val,seconds)
    }

    function MultipleSet(...objectArrays){
        return cache.mset(objectArrays)
    }

    function Get(key){
        return cache.get(key)
    }

    function MultipleGet(...keys){
        return cache.mget(keys)
    }

    function Delete(key){
        return cache.del(key)
    }

    function FlushAll(){
         cache.flushAll()
    }

    function Close(){
        cache.close()
    }

}

module.exports=CachingManagerFactory