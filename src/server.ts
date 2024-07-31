import express from 'express'
import { env } from './env.js'
import { addCoffee } from './router/add-coffee.js'
import { getAllCoffees } from './router/get-all-coffees.js';
import { getCoffeesForTag } from './router/get-coffees-for-tag.js';

export const app = express();

app.use(express.json())

addCoffee(app)
getAllCoffees(app)
getCoffeesForTag(app)

app.listen(env.PORT, () => {
    console.log('Server running!')
})