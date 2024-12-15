import { Request, Response } from 'express';
import { z } from 'zod';
import { errorHandler } from '@/error-handler.js';
import { ClientError } from '@/errors/client-error.js';
import { mongoDatabase } from '../models/index.js';

const bodySchema = z.array(
    z.object({
        name: z.string().min(4),
        tags: z.array(z.string().min(4)),
        slugs: z.array(z.string().min(4)),
        image: z.string().url(),
        description: z.string().min(24),
        price: z.string().min(2),
    }),
);

export async function registerManyCoffees(request: Request, response: Response) {
    try {
        const coffeesList = bodySchema.parse(request.body);

        const coffees = await mongoDatabase.Coffee.insertMany(coffeesList);

        if (!coffees) {
            throw new ClientError('Coffees not creates');
        }
        response.send({ coffeesCount: coffees.length });
    } catch (error) {
        errorHandler(error, response);
    }
}
