import { addressSchema, paramsSchema } from '_types/schema.js';
import { Express, Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
import cors from 'cors';

export function updateAddress(app: Express) {
    app.put(
        '/user/:userId',
        cors({
            origin: '*',
        }),
        async (request: Request, response: Response) => {
            const { userId } = paramsSchema.parse(request.params);
            const { cep, city, complement, neighborhood, number, street, uf } = addressSchema.parse(request.body);

            const addressUsers = await prisma.addressUser.findUnique({
                where: { id: userId },
            });

            if (!addressUsers) {
                throw new Error('AddressUser not found');
            }

            await prisma.addressUser.update({
                where: { id: userId },
                data: {
                    cep,
                    city,
                    complement,
                    neighborhood,
                    number,
                    street,
                    uf,
                },
            });

            response.send({ userId: addressUsers.id });
        },
    );
}
