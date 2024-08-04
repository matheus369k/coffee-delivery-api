import { Express, Request, Response } from 'express';
import { addressSchema } from '_types/schema.js';
import { prisma } from '@lib/prisma.js';
import cors from 'cors';

export function registerAddress(app: Express) {
    app.post(
        '/user/register',
        cors({
            origin: '*',
        }),
        async (request: Request, response: Response) => {
            const { cep, city, complement, neighborhood, number, street, uf } = addressSchema.parse(request.body);

            const addressUser = await prisma.addressUser.create({
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

            if (!addressUser) {
                throw new Error('AddressUser not found');
            }

            response.send({ addressUserId: addressUser.id });
        },
    );
}
