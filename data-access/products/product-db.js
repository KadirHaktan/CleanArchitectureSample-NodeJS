


function makeProductDb({ExecQuery}) {

    let sql

    return Object.freeze({
        GetAll,
        GetById,
        GetIdByName,
        GetSupplierAndProductById,
        GetSupplierAndProduct,
        GetSupplierIdByName,
        GetCategoryIdByName,
        Insert,
        Remove,
        Update
    })

   

    async function GetAll() {
        sql = "SELECT * FROM Products"
        return ExecQuery(sql)
    }

    async function GetById(id) {
    
        sql=`SELECT * FROM Products WHERE Products.ProductID=${id}`
        return ExecQuery(sql)
    }

    async function GetIdByName({ProductName}={}) {
        sql=`SELECT * FROM Products WHERE Products.ProductName=${ProductName}`
        return ExecQuery(sql)
    }


    async function GetSupplierIdByName({CompanyName}={}){
        sql =`SELECT products.SupplierID
        FROM products 
        INNER JOIN suppliers ON suppliers.SupplierID=products.SupplierID
        WHERE suppliers.CompanyName=${CompanyName}`

        return ExecQuery(sql)
    }

    async function GetCategoryIdByName({CategoryName}={}){
        sql =`SELECT products.CategoryID
        FROM products 
        INNER JOIN categories ON categories.CategoryID=products.CategoryID
        WHERE categories.CategoryName=${CategoryName}`

        return ExecQuery(sql)
    }


    async function GetSupplierAndProductById(id){
        sql =`SELECT products.ProductName,
        products.UnitPrice,
        products.UnitsInStock,
        products.UnitsOnOrder,
        products.QuantityPerUnit,
        categories.CategoryID,
        categories.CategoryName,
        categories.Description,
        suppliers.SupplierID,
        suppliers.CompanyName,
        suppliers.ContactName,
        suppliers.ContactTitle
        FROM products 
        INNER JOIN suppliers ON suppliers.SupplierID=products.SupplierID
        INNER JOIN categories ON categories.CategoryID=products.CategoryID
        WHERE products.ProductID=${id}`

        return ExecQuery(sql)
    }

    async function GetSupplierAndProduct(){
        sql =`SELECT products.ProductName,
        products.UnitPrice,
        products.UnitsInStock,
        products.UnitsOnOrder,
        products.QuantityPerUnit,
        categories.CategoryID,
        categories.CategoryName,
        categories.Description,
        suppliers.SupplierID,
        suppliers.CompanyName,
        suppliers.ContactName,
        suppliers.ContactTitle
        FROM products 
        INNER JOIN suppliers ON suppliers.SupplierID=products.SupplierID
        INNER JOIN categories ON categories.CategoryID=products.CategoryID`

        

        return ExecQuery(sql)
    }

    async function Insert({
        ProductName,
        SupplierID,
        CategoryID,
        QuantityPerUnit,
        UnitPrice,
        UnitsInStock,
        UnitsOnOrder
    } = {}) {  
        sql = `INSERT INTO products(ProductName,SupplierID,CategoryID,QuantityPerUnit,UnitPrice,UnitsInStock,UnitsOnOrder) 
        VALUES ('${ProductName}','${SupplierID}','${CategoryID}','${QuantityPerUnit}','${UnitPrice}','${UnitsInStock}','${UnitsOnOrder}')`
        return ExecQuery(sql)
    }

    async function Remove(id){
        sql=`DELETE FROM products WHERE products.ProductID=${id}`
        return ExecQuery(sql)
    }

    async function Update(id,body){
        sql=`UPDATE users SET ? WHERE users.Id==${id}`
        return ExecQuery(sql,body)
    }
}

module.exports=makeProductDb