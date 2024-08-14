import { Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
import { z } from 'zod';
import { errorHandler } from '@/error-handler.js';
import { ClientError } from '@/errors/client-error.js';

const paramsZodType = z.object({
    slug: z.string().min(4),
});

export async function getCoffeesSlug(request: Request, response: Response) {
    try {
        const { slug } = paramsZodType.parse(request.params);

        const coffees = await prisma.coffee.findMany({
            where: {
                slugs: {
                    has: slug,
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
