
const NodeCache=require('node-cache')
const cache=new NodeCache({
    useClones:false,
    checkperiod:1800
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