import { Express, Request, Response } from 'express'
import { z } from 'zod'
import { prisma } from '../lib/prisma.js';

const addressZodType = z.object({
    cep: z.coerce.string().min(8),
    street: z.string().min(4),
    number: z.coerce.number().min(1),
    complement: z.string().min(4),
    neighborhood: z.string().min(4),
    city: z.string().min(4),
    uf: z.string().min(2),
});

export async function registerAddress(app: Express) {
    app.post('/user/register', async (request: Request, response: Response) => {
        const { cep, city, complement, neighborhood, number, street, uf } = addressZodType.parse(request.body)

        const addressUser = await prisma.addressUser.create({
            data: {
                cep,
                city,
                complement,
                neighborhood,
                number,
                street,
                uf
            }
        })

        if (!addressUser) {
            throw new Error('AddressUser not found')
        }

        response.send({ addressUserId: addressUser.id })
    })
}