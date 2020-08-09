

const {hash,genSalt}=require('bcryptjs')
let Validate = require('../../core/validation/user-validate')

const Hash=require('../../core/utils/hash/hash-adapter')({
    hash,
    generateSalt:genSalt

})

const makeUser=require('./user')
const User=makeUser({Hash,Validate})

module.exports=User