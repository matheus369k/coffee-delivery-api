import { Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
import { errorHandler } from '@/error-handler.js';
import { ClientError } from '@/errors/client-error.js';
import axios from 'axios';
import { env } from '@/env.js';

export async function getAllCoffees(request_: Request, response: Response) {
    try {
        const coffees = await Promise.race([prisma.coffee.findMany(), (await axios.get(env.GH_DATABASE_URL)).data]);

        if (!coffees) {
            throw new ClientError('Coffees not found');
        }

        response.send({ coffees });
    } catch (error) {
        errorHandler(error, response);
    }
}
