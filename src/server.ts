import { registerCoffee } from '@router/register-coffee.js';
import { getAllCoffees } from '@router/get-all-coffees.js';
import { getCoffeesForType } from '@router/get-coffees-for-type.js';
import { registerAddress } from '@router/register-address.js';
import { registerShoppingCoffees } from '@/router/register-shopping-coffees.js';
import { updateAddress } from '@router/update-address.js';
import { getAddress } from '@router/get-address.js';
import { env } from '_types/env.js';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: '*',
    }),
);

registerCoffee(app);
getAllCoffees(app);
getCoffeesForType(app);
registerAddress(app);
registerShoppingCoffees(app);
updateAddress(app);
getAddress(app);

app.listen(env.PORT, () => {
    console.log('Server running!');
});
