const express=require('express')

const app=express()
const bodyparser=require('body-parser')

const env=require('dotenv')
const directoryName=__dirname
env.config({
    path:`${directoryName}/config/.env`
})

const {
    GetProductController,
    GetProductSupplierController,
    NotFoundController,
    AddProductController,
    UpdateProductController,
    DeleteProductController,
    AddUserController,
    AddUserWithMultiRolesController
}=require('./controllers/index')


const ControllerCallback=require('./frameworks/web/express/controller-callback')


app.use(bodyparser.json())


app.get('/products',ControllerCallback(GetProductController))
app.get('/products/:id',ControllerCallback(GetProductController))

app.get('/productsupplier',ControllerCallback(GetProductSupplierController))
app.get('/productsupplier/:id',ControllerCallback(GetProductSupplierController))


app.post('/products',ControllerCallback(AddProductController))
app.put('/products/:id',ControllerCallback(UpdateProductController))
app.delete('/products/:id',ControllerCallback(DeleteProductController))


app.post('/users/role',ControllerCallback(AddUserController))
app.post('/users/roles',ControllerCallback(AddUserWithMultiRolesController))




app.use(ControllerCallback(NotFoundController))


app.listen(3020,()=>{
    console.log('3020 port active...')
})

