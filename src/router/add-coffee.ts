import { z } from "zod"
import { prisma } from "../lib/prisma.js"
import { Express, Request, Response } from 'express'

const bodyZodValidate = z.object({
    name: z.string().min(4),
    tags: z.array(z.string().min(4)),
    image: z.string().url(),
    description: z.string().min(24),
    price: z.string().min(2)

})

export async function addCoffee(app: Express) {
    app.post('/coffees', async (request: Request, response: Response) => {
        const { name, tags, image, description, price } = bodyZodValidate.parse(request.body);

        const coffees = await prisma.coffee.create({
            data: {
                name,
                tags,
                image,
                description,
                price,
            }
        })

        if (!coffees) {
            throw new Error('Coffee not found')
        }

        response.send({ coffeeId: coffees.id });
    })
}