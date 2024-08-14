import { Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
import { z } from 'zod';

const paramsZodType = z.object({
    type: z.string().min(4),
});

export async function getCoffeesForType(request: Request, response: Response) {
    const { type } = paramsZodType.parse(request.params);

    const coffees = await prisma.coffee.findMany({
        where: {
            tags: {
                has: type,
            },
        },
    });

    if (!coffees) {
        return response.send({ message: 'Coffees Not found' });
    }

    response.send({ coffees: coffees });
}
