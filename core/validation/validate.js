


function Validate(){
    return {
       IsValid,
       HasLength,
       LessThanZero
    }

    function IsValid(...properties) {
        properties.map(property=>{
            
            if (!property) {
                throw new Error(`${property} must not be empty`)
            }
            
            return property
        })
        return Validate()
    }

    
    function HasLength(property,number) {

        if (property.length < number) {
            throw new Error(`${property} length must be greater than ${number}`)
        }

        return Validate()

    }

    
    function LessThanZero(property) {
        if(property<0){
            throw new Error(`${property} must be greater than zero`)
        }

        return Validate()
    }
}

module.exports=Validate()