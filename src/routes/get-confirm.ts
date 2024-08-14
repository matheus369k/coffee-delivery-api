import { Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
import { z } from 'zod';
import { errorHandler } from '@/error-handler.js';
import { ClientError } from '@/errors/client-error.js';

const paramsSchema = z.object({
    shoppingId: z.string().uuid(),
});

export async function getConfirm(request: Request, response: Response) {
    try {
        const { shoppingId } = paramsSchema.parse(request.params);

        const shopping = await prisma.shopping.findUnique({
            where: { id: shoppingId },
            select: {
                form_of_payment: true,
                address_id: true,
            },
        });

        if (!shopping) {
            throw new ClientError('Shopping not found');
        }
        response.send({ shopping: shopping });
    } catch (error) {
        errorHandler(error, response);
    }
}
