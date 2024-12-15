import { Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
import { errorHandler } from '@/error-handler.js';
import { ClientError } from '@/errors/client-error.js';

export async function getAllCoffees(request_: Request, response: Response) {
    try {
        const coffees = await prisma.coffee.findMany();

        if (!coffees) {
            throw new ClientError('Coffees not found');
        }

        response.send({ coffees });
    } catch (error) {
        errorHandler(error, response);
    }
}
