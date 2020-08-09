const {NotFoundError} = require('../../core/utils/errors/index')


function MakeGetProductsWithSuppliersAndCategories({makeProductDb}) {
    return async function getProductsWithSuppliersAndCategories(id = null) {
        if (!id) {
            return await makeProductDb.GetSupplierAndProduct()
        }
        return  await ProductExists(id)

    }


    async function ProductExists(id) {
        const product = await makeProductDb.GetSupplierAndProductById(id)
        if (product.length === 0) {
            throw new NotFoundError('Product can not be found')
        }

        return product
    }
}

module.exports = MakeGetProductsWithSuppliersAndCategories