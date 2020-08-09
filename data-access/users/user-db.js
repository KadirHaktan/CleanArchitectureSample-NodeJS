function makeUserDb({ExecQuery}) {

    let sql

    return Object.freeze({
        GetAll,
        GetById,
        GetByEmail,
        GetAllUserRoles,
        GetUserRoles,
        GetByName,
        Insert,
        Remove,
        Update
    })
    async function GetAll() {
        sql = "SELECT * FROM users"
        return ExecQuery(sql)
    }

    async function GetById(id) {
        sql = `SELECT * FROM users WHERE users.Id=${id}`
        return ExecQuery(sql)
    }

    async function GetByName({Name}) {
        sql = `SELECT * FROM users WHERE users.UserName='${Name}'`
        return ExecQuery(sql)
    }

    async function GetByEmail({email}){
        sql = `SELECT * FROM users WHERE users.Email='${email}'`
        return ExecQuery(sql)
    }

    async function GetUserRoles(id){
        sql=`SELECT roles.RoleName,users.UserName FROM users
        INNER JOIN userroles ON users.Id=userroles.UserId
        INNER JOIN roles ON userroles.RoleId=roles.Id
        WHERE users.Id=${id} `

        return ExecQuery(sql)
    }

    async function GetAllUserRoles(){
        sql=`SELECT roles.RoleName,users.UserName FROM users
        INNER JOIN userroles ON users.Id=userroles.UserId
        INNER JOIN roles ON userroles.RoleId=roles.Id
        `

        return ExecQuery(sql)
    }


    async function Insert({
        UserName,
        Password,
        Email
    } = {}) {
        
        sql = `INSERT INTO users(UserName,Password,Email) VALUES ('${UserName}','${Password}','${Email}')`

        return ExecQuery(sql)
    }

    async function Remove(id){
        sql=`DELETE FROM users WHERE users.Id=${id}`
        return ExecQuery(sql)
    }

    async function Update(id,body){
        sql=`UPDATE users SET ? WHERE users.Id==${id}`
        

        return ExecQuery(sql,body)
    }

   
}

module.exports=makeUserDb