import express from 'express'
import { env } from './env.js'
import { registerCoffee } from './router/register-coffee.js'
import { getAllCoffees } from './router/get-all-coffees.js'
import { getCoffeesForType } from './router/get-coffees-for-type.js'
import { registerAddress } from './router/register-address.js'
import { registerBuyCoffee } from './router/register-buy-coffee.js'

const app = express()

app.use(express.json())

registerCoffee(app)
getAllCoffees(app)
getCoffeesForType(app)
registerAddress(app)
registerBuyCoffee(app)

app.listen(env.PORT, () => {
    console.log('Server running!')
})