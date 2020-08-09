

const NotFoundController=require('./404-Not-Found')
const {
    GetProductController,
    AddProductController,
    UpdateProductController,
    DeleteProductController,
    GetProductSupplierController
}=require('./products/index')

const {
    AddUserController,
    AddUserWithMultiRolesController
}=require('./users/index')

module.exports=Object.freeze({
    GetProductController,
    GetProductSupplierController,
    AddProductController,
    UpdateProductController,
    DeleteProductController,
    AddUserController,
    AddUserWithMultiRolesController,
    NotFoundController
})