
const database=require('../frameworks/db/MySQL/MySqlHelper')()

const ExecQuery=require('../core/db/process-exec-query')({database})



const makeUserDb=require('./users/user-db')({ExecQuery})
const makeCategoryDb=require('./categories/category-db')({ExecQuery})
const makeProductDb=require('./products/product-db')({ExecQuery})
const makeUserRoleDb=require('./user-roles/user-role-db')({ExecQuery})
const makeRoleDb=require('./roles/role-db')({ExecQuery})




module.exports=Object.freeze({
    makeProductDb,
    makeCategoryDb,
    makeUserDb,
    makeUserRoleDb,
    makeRoleDb,    
})


