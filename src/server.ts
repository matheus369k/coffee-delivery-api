import { registerManyCoffees } from '@/router/register-many-coffees.js';
import { getAllCoffees } from '@router/get-all-coffees.js';
import { getCoffeesForType } from '@router/get-coffees-for-type.js';
import { registerAddress } from '@router/register-address.js';
import { registerShoppingCoffees } from '@/router/register-shopping-coffees.js';
import { updateAddress } from '@router/update-address.js';
import { getConfirm } from '@/router/get-confirm.js';
import { env } from '@/env.js';
import express from 'express';
import { Router } from 'express';
import cors from 'cors';
import { getCheckoutAddress } from './router/get-checkout-address.js';
import { getLocation } from './router/get-location.js';

const app = express();
const routes = Router();

app.use(express.json());
app.use(routes);
app.use('*', cors());

registerManyCoffees(app);
getAllCoffees(app);
getCoffeesForType(app);
registerAddress(app);
registerShoppingCoffees(app);
updateAddress(app);
getConfirm(app);
getCheckoutAddress(app);
getLocation(app);

app.listen(env.PORT, () => {
    console.log('Server running!');
});
