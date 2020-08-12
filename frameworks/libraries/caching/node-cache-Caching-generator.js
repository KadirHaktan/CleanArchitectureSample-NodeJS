
const NodeCache=require('node-cache')
const cache=new NodeCache({
    stdTTL:60*60*1,
    checkperiod:60*60*1*0.2,
    useClones:false
})

const {
    Get,
    GetOrSet,
    Set,
    Delete,
    FlushAll,
    MultipleGet,
    MultipleSet

}=require('../../../core/caching/caching-manager')({cache})


module.exports=Object.freeze({
    Get,
    GetOrSet,
    Set,
    Delete,
    FlushAll,
    MultipleGet,
    MultipleSet
})