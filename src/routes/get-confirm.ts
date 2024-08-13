import { Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
import { z } from 'zod';

const paramsSchema = z.object({
    shoppingId: z.string().uuid(),
});

export async function getConfirm(request: Request, response: Response) {
    const { shoppingId } = paramsSchema.parse(request.params);

    const shoppingCoffeeList = await prisma.shoppingCoffeeList.findUnique({
        where: { id: shoppingId },
        select: {
            form_of_payment: true,
            AddressUser: true,
        },
    });

    if (!shoppingCoffeeList) {
        throw new Error('AddressUser not found');
    }

    response.send({ shoppingCoffeeList: shoppingCoffeeList });
}
