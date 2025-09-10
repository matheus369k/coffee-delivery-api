import { Router } from 'express';
import { getLocation } from './routes/get-location.js';
import { getAllCoffees } from './routes/get-all-coffees.js';
import { getCoffeesSlug } from './routes/get-coffees-slug.js';
import { getConfirm } from './routes/get-confirm.js';
import { getCheckoutAddress } from './routes/get-checkout-address.js';
import { registerManyCoffees } from './routes/register-many-coffees.js';
import { registerAddress } from './routes/register-address.js';
import { registerShoppingCoffees } from './routes/register-shopping-coffees.js';
import { updateAddress } from './routes/update-address.js';

const routes = Router();

routes.get('/hearth', (_, res) => {
    res.send('ok');
});
routes.get('/location/:addressId', getLocation);
routes.get('/coffees', getAllCoffees);
routes.get('/coffees/:slug', getCoffeesSlug);
routes.get('/shopping/:shoppingId', getConfirm);
routes.get('/user/:addressId', getCheckoutAddress);

routes.post('/coffees', registerManyCoffees);
routes.post('/user/register', registerAddress);
routes.post('/shopping/:addressId', registerShoppingCoffees);

routes.put('/user/:addressId', updateAddress);

export { routes };
