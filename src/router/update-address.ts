import { Express, Request, Response } from 'express'
import { z } from 'zod'
import { prisma } from '../lib/prisma.js';

const paramsZodType = z.object({
    userId: z.string().uuid()
})

const addressZodType = z.object({
    cep: z.coerce.string().min(8),
    street: z.string().min(4),
    number: z.coerce.number().min(1),
    complement: z.string().min(4),
    neighborhood: z.string().min(4),
    city: z.string().min(4),
    uf: z.string().min(2),
});

export async function updateAddress(app: Express) {
    app.put('/user/:userId', async (request: Request, response: Response) => {
        const { userId } = paramsZodType.parse(request.params)
        const { cep, city, complement, neighborhood, number, street, uf } = addressZodType.parse(request.body)

        const addressUsers = await prisma.addressUser.findUnique({
            where: { id: userId }
        })

        if (!addressUsers) {
            throw new Error('AddressUser not found')
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
            }
        })

        response.send({ userId: addressUsers.id })
    })
}