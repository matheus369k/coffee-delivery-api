import { registerCoffee } from './router/register-coffee.js';
import { getAllCoffees } from './router/get-all-coffees.js';
import { getCoffeesForType } from './router/get-coffees-for-type.js';
import { registerAddress } from './router/register-address.js';
import { registerBuyCoffee } from './router/register-buy-coffee.js';
import { updateAddress } from './router/update-address.js';
import { getAddress } from './router/get-address.js';
import express from 'express';
import { env } from './env.js';

const app = express();

app.use(express.json());

registerCoffee(app);
getAllCoffees(app);
getCoffeesForType(app);
registerAddress(app);
registerBuyCoffee(app);
updateAddress(app);
getAddress(app);

app.listen(env.PORT, () => {
    console.log('Server running!');
});
