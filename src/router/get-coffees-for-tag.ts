import { Express, Response, Request } from 'express'
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';

const paramsZodType = z.object({
    tag: z.string().min(4)
})

export async function getCoffeesForTag(app: Express) {
    app.get('/coffees/:tag', async (request: Request, response: Response) => {
        const { tag } = paramsZodType.parse(request.params);

        const coffees = await prisma.coffee.findMany({
            where: {
                tags: {
                    has: tag,
                }
            }
        })

        if (!coffees) {
            throw new Error("Coffees Not found")
        }

        response.send({ coffees: coffees })
    })
}