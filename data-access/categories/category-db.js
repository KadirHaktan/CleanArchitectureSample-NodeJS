function makeCategoryDb({ExecQuery}) {

    let sql

    return Object.freeze({
        GetAll,
        GetById,
        Insert,
        Remove,
        Update
    })

   

    async function GetAll() {
        sql = "SELECT * FROM categories"
        return ExecQuery(sql)
    }

    async function GetById(id) {
        sql = `SELECT * FROM categories WHERE categories.CategoryID==${id}`
        return ExecQuery(sql)
    }


    async function Insert({
        CategoryName,
        Description   
    } = {}) {
        sql = `INSERT INTO products(CategoryName,Description) VALUES ('${CategoryName}','${Description}')`
        return ExecQuery(sql)
    }

    async function Remove(id){
        sql=`DELETE FROM categories WHERE categories.CategoryID==${id}`
        return ExecQuery(sql)
    }

    async function Update(id,body){
      
        sql=`UPDATE categories SET ? WHERE categories.CategoryID==${id}`

        return ExecQuery(sql,body)
    }

}

module.exports=makeCategoryDb