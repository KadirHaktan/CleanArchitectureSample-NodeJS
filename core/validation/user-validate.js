


let {IsValid}=require('./validate')


function UserValidate(){
    return {
        IsValidEmail,
        IsValidPassword,
        IsValid
    }

    function IsValidEmail(email){
        const validEmail=new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)      
        if(!validEmail.test(email)){
            throw new Error('Email is not valid')
        }

        return UserValidate()
    }

    function IsValidPassword(password){
      const validPassword=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])")
    
      if(!validPassword.test(password)){
          throw new Error('Invalid password format')
      }

      return UserValidate()
    }
}

module.exports=UserValidate()