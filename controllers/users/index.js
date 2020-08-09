

const {makeAddUserWithSingleRole,makeAddUserWithMultiRoles}=require('../../use-cases/user/index')


const AddUserController=require('./add-user')({makeAddUserWithSingleRole})
const AddUserWithMultiRolesController=require('./add-user-multi-role')({makeAddUserWithMultiRoles})


module.exports={
    AddUserController,
    AddUserWithMultiRolesController
}