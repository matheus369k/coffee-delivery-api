import { Request, Response } from 'express';
import { ClientError } from '@/errors/client-error.js';
import { mongoDatabase } from '../models/index.js';
import { errorHandler } from '@/error-handler.js';

export async function getAllCoffees(request_: Request, response: Response) {
    try {
        const coffees = await mongoDatabase.Coffee.find();

        if (!coffees) throw new ClientError('Coffees not found');

        response.send({ coffees });
    } catch (error) {
        errorHandler(error, response);
    }
}
