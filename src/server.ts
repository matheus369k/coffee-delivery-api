import express from 'express'
import { env } from './env.js'
import { addCoffee } from './router/add-coffee.js'
import { getAllCoffees } from './router/get-all-coffees.js'
import { getCoffeesForType } from './router/get-coffees-for-type.js'
import { createNewUserRegister } from './router/register-new-user.js'
import { createBuyCoffee } from './router/create-buy-coffee.js'

const app = express()

app.use(express.json())

addCoffee(app)
getAllCoffees(app)
getCoffeesForType(app)
createNewUserRegister(app)
createBuyCoffee(app)

app.listen(env.PORT, () => {
    console.log('Server running!')
})