import { ClientError } from './errors/client-error.js';
import { Response } from 'express';
import { ZodError } from 'zod';

export function errorHandler<T>(error: T, response: Response) {
    if (error instanceof ClientError) {
        return response.status(400).send({ message: error.message });
    }

    if (error instanceof ZodError) {
        return response.status(400).send({
            message: 'Input invalid',
            errors: error.flatten().fieldErrors,
        });
    }

    response.status(500).send({ message: 'Server error' });
}
