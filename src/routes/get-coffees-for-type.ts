import { Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
import { z } from 'zod';
import { errorHandler } from '@/error-handler.js';
import { ClientError } from '@/errors/client-error.js';

const paramsZodType = z.object({
    type: z.string().min(4),
});

export async function getCoffeesForType(request: Request, response: Response) {
    try {
        const { type } = paramsZodType.parse(request.params);

        const coffees = await prisma.coffee.findMany({
            where: {
                tags: {
                    has: type,
                },
            },
        });

        if (!coffees) {
            throw new ClientError('Coffees Not found');
        }

        response.send({ coffees: coffees });
    } catch (error) {
        errorHandler(error, response);
    }
}
