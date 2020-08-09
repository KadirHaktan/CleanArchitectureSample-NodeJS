function makeUserRoleDb({ExecQuery}) {

    let sql

    console.log(ExecQuery)
    return Object.freeze({
        GetAll,
        GetById,
        Insert,
        Remove,
        Update
      
    })
    async function GetAll() {
        sql = "SELECT * FROM userroles"
        return ExecQuery(sql)
    }

    async function GetById(id) {
        sql = `SELECT * FROM userroles WHERE userroles.Id=${id}`
        return ExecQuery(sql)
    }

    async function Insert({
        RoleId,
        UserId
    } = {}) {
        sql = `INSERT INTO userroles(RoleId,UserId) VALUES (${RoleId},${UserId})`
        
        return ExecQuery(sql)
    }

    async function Remove(id){
        sql=`DELETE FROM userroles WHERE userroles.Id=${id}`
        return ExecQuery(sql)
    }

    async function Update(id,body){
        sql=`UPDATE userroles SET ? WHERE userroles.Id==${id}`
        

        return ExecQuery(sql,body)
    }
}

module.exports=makeUserRoleDb