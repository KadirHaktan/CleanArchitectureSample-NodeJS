
const redis=require('redis')

const client=redis.createClient({
    port:6379,
    host:"127.0.0.1"
})

module.exports=client