import { prisma } from '@/lib/prisma.js';
import { Express, Response, Request } from 'express';
import { z } from 'zod';

const paramsZodType = z.object({
    addressId: z.string().uuid(),
});

export function getCheckoutAddress(app: Express) {
    app.get('/user/:addressId', async (request: Request, response: Response) => {
        const { addressId } = paramsZodType.parse(request.params);

        const addressUser = await prisma.addressUser.findUnique({
            where: { id: addressId },
        });

        if (!addressUser) {
            throw new Error('addressUser not found');
        }

        response.send({ addressUser: addressUser });
    });
}
