import { Express, Request, Response } from 'express';
import { paramsSchema } from '_types/schema.js';
import { prisma } from '@lib/prisma.js';
import { z } from 'zod';

const bodyZodType = z.object({
    form_of_payment: z.string().min(4),
    coffees_list: z.array(
        z.object({
            name: z.string().min(4),
            image: z.string().url(),
            total_price: z.string(),
            count: z.coerce.number(),
        }),
    ),
});

export function registerShoppingCoffees(app: Express) {
    app.post('/shopping/:userId', async (request: Request, response: Response) => {
        const { userId } = paramsSchema.parse(request.params);
        const { coffees_list, form_of_payment } = bodyZodType.parse(request.body);

        const addressUsers = await prisma.addressUser.findUnique({
            where: { id: userId },
        });

        if (!addressUsers) {
            throw new Error('User not found');
        }

        const shoppingCoffeeList = await prisma.shoppingCoffeeList.create({
            data: {
                form_of_payment,
                boyCoffees: {
                    createMany: {
                        data: [...coffees_list],
                    },
                },
                addressUserId: addressUsers.id,
            },
        });

        response.send({ shoppingCoffeeListId: shoppingCoffeeList.id });
    });
}
