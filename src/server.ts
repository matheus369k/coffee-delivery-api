import express from 'express';
import { env } from './env.js';

export const app = express();

app.listen(env.PORT, () => {
    console.log('Server running!')
})