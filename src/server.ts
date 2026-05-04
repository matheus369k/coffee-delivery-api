import { routes } from '@/routes';
import { env } from '@/env';
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

app.listen(env.PORT, () => console.log('HTTP server running!'));
