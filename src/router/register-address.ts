import { Express, Request, Response } from 'express'
import { z } from 'zod'
import { prisma } from '../lib/prisma.js';
import { addressSchema } from '../@types/types.js';

export async function registerAddress(app: Express) {
    app.post('/user/register', async (request: Request, response: Response) => {
        const { cep, city, complement, neighborhood, number, street, uf } = addressSchema.parse(request.body)

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