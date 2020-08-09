

const con=require('./MySqlHelper')()


const CreateUserTable=async()=>{

    try{
    const createQuery=
    "CREATE TABLE Users"+
    "(`Id` int AUTO_INCREMENT PRIMARY KEY,"+
    "`UserName` VARCHAR(255),"+
    "`Email` VARCHAR(255),"+
    "`Password` VARCHAR(500))"
    

    await con.query(createQuery)
    console.log("%cTable created...","color:green")
    process.exit()
    }

    catch(e){
        console.log(`%c${e}`,"color:red")
    }
}

const CreateRoleTable=async()=>{

    try{
    const createQuery=
    "CREATE TABLE Roles"+
    "(`Id` int AUTO_INCREMENT PRIMARY KEY,"+
    "`RoleName` VARCHAR(255))"
    

    await con.query(createQuery)
    console.log("%cTable created...","color:green")
    process.exit()
    }

    catch(e){
        console.log(`%c${e}`,"color:red")
    }
}


if(process.argv[2]==='-u'){
    CreateUserTable()
}

if(process.argv[2]==='-r'){
    CreateRoleTable()
}

