import { Response, Request } from 'express';
import { prisma } from '@/lib/prisma.js';
import { z } from 'zod';
import { errorHandler } from '@/error-handler.js';
import { ClientError } from '@/errors/client-error.js';

const paramsZodType = z.object({
    addressId: z.string().uuid(),
});

export async function getCheckoutAddress(request: Request, response: Response) {
    try {
        const { addressId } = paramsZodType.parse(request.params);

        const addressUser = await prisma.addressUser.findUnique({
            where: { id: addressId },
        });
        if (!addressUser) {
            throw new ClientError('addressUser not found');
        }

        response.send({ addressUser: addressUser });
    } catch (error) {
        errorHandler(error, response);
    }
}
