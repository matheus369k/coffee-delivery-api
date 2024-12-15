import { routes } from './routes.js';
import { env } from '@/env.js';
import express from 'express';
import cors from 'cors';
import { mongooseConnect } from './mongo/mongoose.js';

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: '*',
    }),
);
app.use(routes);

app.listen(env.PORT, () => {
    mongooseConnect()
        .then(() => {
            console.log('HTTP server running!');
        })
        .catch((errors) => {
            console.log(errors.message);
        });
});
