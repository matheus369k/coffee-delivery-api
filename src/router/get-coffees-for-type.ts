import { Express, Response, Request } from 'express';
import { z } from 'zod';
import { prisma } from '../lib/prisma.js';

const paramsZodType = z.object({
    type: z.string().min(4),
});

export function getCoffeesForType(app: Express) {
    app.get('/coffees/:type', async (request: Request, response: Response) => {
        const { type } = paramsZodType.parse(request.params);

        const coffees = await prisma.coffee.findMany({
            where: {
                tags: {
                    has: type,
                },
            },
        });

        if (!coffees) {
            throw new Error('Coffees Not found');
        }

        response.send({ coffees: coffees });
    });
}
