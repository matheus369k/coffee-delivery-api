import { Request, Response } from 'express';
import { prisma } from '@lib/prisma.js';
import { z } from 'zod';
import { errorHandler } from '@/error-handler.js';
import { ClientError } from '@/errors/client-error.js';

const paramsSchema = z.object({
    addressId: z.string().uuid(),
});

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

export async function registerShoppingCoffees(request: Request, response: Response) {
    try {
        const { addressId } = paramsSchema.parse(request.params);
        const { coffees_list, form_of_payment } = bodyZodType.parse(request.body);

        const address = await prisma.address.findUnique({
            where: { id: addressId },
        });

        if (!address) {
            throw new ClientError('User not found');
        }

        const shopping = await prisma.shopping.create({
            data: {
                form_of_payment,
                buy: {
                    createMany: {
                        data: [...coffees_list],
                    },
                },
                address_id: address.id,
            },
        });

        if (!shopping) {
            throw new ClientError('Shopping not create');
        }

        response.send({ shoppingId: shopping.id });
    } catch (error) {
        errorHandler<typeof error>(error, response);
    }
}
