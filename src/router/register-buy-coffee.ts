import { Express, Request, Response } from 'express';
import { prisma } from '../lib/prisma.js';
import { paramsSchema } from '../@types/types.js';
import { z } from 'zod';

const bodyZodType = z.object({
    name: z.string().min(4),
    image: z.string().url(),
    total_price: z.string(),
    count: z.coerce.number(),
});

export function registerBuyCoffee(app: Express) {
    app.post('/user/:userId', async (request: Request, response: Response) => {
        const { userId } = paramsSchema.parse(request.params);
        const { count, image, name, total_price } = bodyZodType.parse(request.body);

        const addressUsers = await prisma.addressUser.findUnique({
            where: { id: userId },
        });

        if (!addressUsers) {
            throw new Error('User not found');
        }

        const boyCoffee = await prisma.boyCoffee.create({
            data: {
                name,
                image,
                total_price,
                count,
                addressUserId: userId,
            },
        });

        response.send({ boyCoffeeId: boyCoffee.id });
    });
}
