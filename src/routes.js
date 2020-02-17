const express = require('express')
const routes = express.Router()

const Productcontroller = require('./controllers/Productcontroller')

//rotas
routes.get('/products', Productcontroller.index)
routes.get('/products/:id', Productcontroller.show)
routes.put('/products/:id', Productcontroller.update)
routes.post('/products', Productcontroller.store)
routes.delete('/products/:id', Productcontroller.destroy)


module.exports = routes