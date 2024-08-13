import { Router } from 'express';
import { getLocation } from './routes/get-location.js';
import { getAllCoffees } from './routes/get-all-coffees.js';
import { getCoffeesForType } from './routes/get-coffees-for-type.js';
import { getConfirm } from './routes/get-confirm.js';
import { getCheckoutAddress } from './routes/get-checkout-address.js';
import { registerManyCoffees } from './routes/register-many-coffees.js';
import { registerAddress } from './routes/register-address.js';
import { registerShoppingCoffees } from './routes/register-shopping-coffees.js';
import { updateAddress } from './routes/update-address.js';

const routes = Router();

routes.get('/location/:userId', getLocation);
routes.get('/coffees', getAllCoffees);
routes.get('/coffees/:type', getCoffeesForType);
routes.get('/shopping/:shoppingId', getConfirm);
routes.get('/user/:addressId', getCheckoutAddress);

routes.post('/coffees', registerManyCoffees);
routes.post('/user/register', registerAddress);
routes.post('/shopping/:userId', registerShoppingCoffees);

routes.put('/user/:userId', updateAddress);

export { routes };
