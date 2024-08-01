import express from 'express'
import { env } from './env.js'
import { addCoffee } from './router/add-coffee.js'
import { getAllCoffees } from './router/get-all-coffees.js'
import { getCoffeesForType } from './router/get-coffees-for-type.js'
import { createNewUserRegister } from './router/register-new-user.js'

const app = express()

app.use(express.json())

addCoffee(app)
getAllCoffees(app)
getCoffeesForType(app)
createNewUserRegister(app)

app.listen(env.PORT, () => {
    console.log('Server running!')
})