
const {makeProductDb}=require('../../data-access/index')


const addProduct=require('./add-product')({makeProductDb})
const getProducts=require('./get-products')({makeProductDb})
const updateProduct=require('./update-product')({makeProductDb})
const deleteProduct=require('./delete-product')({makeProductDb})
const getProductsSuppliers=require('./get-suppliers-categories')({makeProductDb})



module.exports=Object.freeze({
    addProduct,
    getProducts,
    getProductsSuppliers,
    updateProduct,
    deleteProduct
})