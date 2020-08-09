

const {makeUserDb,makeUserRoleDb,makeRoleDb}=require('../../data-access/index')



const makeAddUser=require('./add-user')({makeUserDb})
const makeAddUserWithSingleRole=require('./add-user-with-single-role')({makeUserDb,makeRoleDb,makeUserRoleDb})
const makeAddUserWithMultiRoles=require('./add-user-with-multi-roles')({makeUserDb,makeRoleDb,makeUserRoleDb})
const makeGetAllUser=require('./get-all-users')({makeUserDb})
const makeGetById=require('./get-by-id-user')({makeUserDb})
const makeUpdateUser=require('./delete-user')({makeUserDb})
const makeDeleteUser=require('./update-user')({makeUserDb})

module.exports=Object.freeze({
    makeGetAllUser,
    makeGetById,
    makeAddUser,
    makeAddUserWithSingleRole,
    makeAddUserWithMultiRoles,
    makeDeleteUser,
    makeUpdateUser
})