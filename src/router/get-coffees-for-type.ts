import { Express, Response, Request } from 'express';
import { prisma } from '@lib/prisma.js';
import { z } from 'zod';
import cors from 'cors';

const paramsZodType = z.object({
    type: z.string().min(4),
});

export function getCoffeesForType(app: Express) {
    app.get(
        '/coffees/:type',
        cors({
            origin: '*',
        }),
        async (request: Request, response: Response) => {
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
        },
    );
}
