let Validate=require('../../core/validation/validate')
const makeCustomer=require('./customer')

const Customer=makeCustomer({Validate})

module.exports=Customer