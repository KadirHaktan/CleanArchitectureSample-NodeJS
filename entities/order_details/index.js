let Validate=require('../../core/validation/validate')
const makeOrderDetail=require('./order-detail')

const OrderList=makeOrderDetail({Validate})

module.exports=OrderList