import { Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
import { z } from 'zod';

const bodySchema = z.array(
    z.object({
        name: z.string().min(4),
        tags: z.array(z.string().min(4)),
        image: z.string().url(),
        description: z.string().min(24),
        price: z.string().min(2),
    }),
);

export async function registerManyCoffees(request: Request, response: Response) {
    const coffeesList = bodySchema.parse(request.body);

    const coffees = await prisma.coffee.createMany({
        data: [...coffeesList],
    });

    if (!coffees) {
        return response.send({ message: 'Coffees not creates' });
    }

    response.send({ coffeesCount: coffees.count });
}
