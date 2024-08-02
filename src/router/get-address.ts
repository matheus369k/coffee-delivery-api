import { Express, Request, Response } from 'express'
import { z } from 'zod'
import { prisma } from '../lib/prisma.js'

const paramsZodType = z.object({
    userId: z.string().uuid()
})

export function getAddress(app: Express) {
    app.get('/user/:userId', async (request: Request, response: Response) => {
        const { userId } = paramsZodType.parse(request.params)

        const addressUser = await prisma.addressUser.findUnique({
            where: { id: userId }
        })

        if (!addressUser) {
            throw new Error("AddressUser not found")
        }

        response.send({ addressUser: addressUser })
    })
}