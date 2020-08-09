let Validate=require('../../core/validation/validate')
const makeEmployee=require('./employee')

const Employee=makeEmployee({Validate})

module.exports=Employee