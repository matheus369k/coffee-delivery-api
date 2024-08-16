import { routes } from './routes.js';
import { env } from '@/env.js';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: '*',
    }),
);
app.use(routes);

app.listen(env.PORT, () => {
    console.log('Server running!');
});
