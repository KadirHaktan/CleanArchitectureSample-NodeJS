function makeRoleDb({ExecQuery}) {

    let sql

    return Object.freeze({
        GetAll,
        GetById,
        GetByName,
        Insert,
        Remove,
        Update
    })

   

    async function GetAll() {
        sql = "SELECT * FROM roles"
        return ExecQuery(sql)
    }

    async function GetById(id) {
        sql = `SELECT * FROM roles WHERE roles.Id=${id}`
        return ExecQuery(sql)
    }

    async function GetByName({RoleName}) {
        sql = `SELECT * FROM roles WHERE roles.RoleName='${RoleName}'`
        return ExecQuery(sql)
    }

    async function Insert({   
        RoleName
    } = {}) {
        sql = `INSERT INTO roles(RoleName) VALUES ('${RoleName}')`
        return ExecQuery(sql)
    }

    async function Remove(id){
        sql=`DELETE FROM roles WHERE roles.Id=${id}`
        return ExecQuery(sql)
    }

    async function Update(id,body){
        sql=`UPDATE roles SET ? WHERE roles.Id==${id}`
        return ExecQuery(sql,body)
    }
}

module.exports=makeRoleDb