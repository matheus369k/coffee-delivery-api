import { Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';

export async function getAllCoffees(request_: Request, response: Response) {
    const coffees = await prisma.coffee.findMany();

    if (!coffees) {
        return response.send({ message: 'Coffees not found' });
    }

    response.send({ coffees: coffees });
}
