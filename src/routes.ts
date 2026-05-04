import { Router } from 'express';
import { getLocation } from '@/routes/get-location';
import { getAllCoffees } from '@/routes/get-all-coffees';
import { getCoffeesSlug } from '@/routes/get-coffees-slug';
import { getConfirm } from '@/routes/get-confirm';
import { getCheckoutAddress } from '@/routes/get-checkout-address';
import { registerManyCoffees } from '@/routes/register-many-coffees';
import { registerAddress } from '@/routes/register-address';
import { registerShoppingCoffees } from '@/routes/register-shopping-coffees';
import { updateAddress } from '@/routes/update-address';

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
