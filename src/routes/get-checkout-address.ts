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

        const address = await prisma.address.findUnique({
            where: { id: addressId },
        });
        if (!address) {
            throw new ClientError('addressUser not found');
        }

        response.send({ address: address });
    } catch (error) {
        errorHandler(error, response);
    }
}
