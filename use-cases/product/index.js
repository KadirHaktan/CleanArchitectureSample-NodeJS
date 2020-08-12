
const {GetOrSet} =require('../../frameworks/libraries/caching/node-cache-Caching-generator')
const {makeProductDb}=require('../../data-access/index')


const addProduct=require('./add-product')({makeProductDb})
const getProducts=require('./get-products')({makeProductDb,GetOrSet})
const updateProduct=require('./update-product')({makeProductDb})
const deleteProduct=require('./delete-product')({makeProductDb})
const getProductsSuppliers=require('./get-suppliers-categories')({makeProductDb,GetOrSet})



module.exports=Object.freeze({
    addProduct,
    getProducts,
    getProductsSuppliers,
    updateProduct,
    deleteProduct
})