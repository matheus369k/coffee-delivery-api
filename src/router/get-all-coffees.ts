import { Express, Request, Response } from 'express'
import { prisma } from '../lib/prisma.js'

export async function getAllCoffees(app: Express) {
    app.get('/coffees', async (request: Request, response: Response) => {
        const coffees = await prisma.coffee.findMany();

        if (!coffees) {
            throw new Error("Coffees not found")
        }

        response.send({ coffees: coffees })
    })
}
