import { Router } from 'express';
import { getLocation } from './routes/get-location.js';
import { getAllCoffees as postGetAllCoffees } from './routes/get-all-coffees.js';
import { getAllCoffees as mongoGetAllCoffees } from './mongo/controllers/get-all-coffees.js';
import { getCoffeesSlug } from './routes/get-coffees-slug.js';
import { getConfirm } from './routes/get-confirm.js';
import { getCheckoutAddress } from './routes/get-checkout-address.js';
import { registerManyCoffees as postRegisterManyCoffees } from './routes/register-many-coffees.js';
import { registerManyCoffees as mongoRegisterManyCoffees } from './mongo/controllers/register-many-coffees.js';
import { registerAddress } from './routes/register-address.js';
import { registerShoppingCoffees } from './routes/register-shopping-coffees.js';
import { updateAddress } from './routes/update-address.js';
import { Request, Response } from 'express';

async function getAllCoffeesManyDatabase(request: Request, response: Response) {
    await Promise.race([postGetAllCoffees(request, response), mongoGetAllCoffees(request, response)]);
}

async function registerManyCoffeesManyDatabase(request: Request, response: Response) {
    await Promise.all([postRegisterManyCoffees(request, response), mongoRegisterManyCoffees(request, response)]);
}

const routes = Router();

routes.get('/location/:addressId', getLocation);
routes.get('/coffees', getAllCoffeesManyDatabase);
routes.get('/coffees/:slug', getCoffeesSlug);
routes.get('/shopping/:shoppingId', getConfirm);
routes.get('/user/:addressId', getCheckoutAddress);

routes.post('/coffees', registerManyCoffeesManyDatabase);
routes.post('/user/register', registerAddress);
routes.post('/shopping/:addressId', registerShoppingCoffees);

routes.put('/user/:addressId', updateAddress);

export { routes };
