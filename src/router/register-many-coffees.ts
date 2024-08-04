import { Express, Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
import { z } from 'zod';
import cors from 'cors';

const bodySchema = z.array(
    z.object({
        name: z.string().min(4),
        tags: z.array(z.string().min(4)),
        image: z.string().url(),
        description: z.string().min(24),
        price: z.string().min(2),
    }),
);

export function registerManyCoffees(app: Express) {
    app.post(
        '/coffees',
        cors({
            origin: 'http://localhost:3333/',
        }),
        async (request: Request, response: Response) => {
            const coffeesList = bodySchema.parse(request.body);

            const coffees = await prisma.coffee.createMany({
                data: [...coffeesList],
            });

            if (!coffees) {
                throw new Error('Coffee not found');
            }

            response.send({ coffeesCount: coffees.count });
        },
    );
}
