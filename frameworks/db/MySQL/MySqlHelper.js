const mysql = require('mysql')
const util = require('util')

function makeDb() {
    const host = process.env.host
    const user = process.env.user
    const password = process.env.password
    const database = process.env.database

    const con = mysql.createConnection({
        host,
        user,
        password,
        database
    })

    function transaction(callback=null){
        return util.promisify(con.beginTransaction)
        .call(con,callback)
    }

    function rollback(callback=null){
        return util.promisify(con.rollback)
        .call(con,callback)
    }

    function commit(callback=null){
        return util.promisify(con.commit)
        .call(con,callback)
    }

    function query(sql, args=null) {
        return util.promisify(con.query)
            .call(con, sql, args)
    }



    function close() {
        return util.promisify(con.end).call(con)
    }

    return Object.freeze({
        query,
        close,
        transaction,
        rollback,
        commit,
        con
    })
}

module.exports = makeDb