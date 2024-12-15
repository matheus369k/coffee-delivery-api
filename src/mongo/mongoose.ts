import Mongoose from 'mongoose';
import { env } from '@/env.js';

export async function mongooseConnect() {
    return await Mongoose.connect(env.MD_DATABASE_URL)
        .then(() => {
            console.log('Connected to mongo database!');
        })
        .catch((error) => {
            throw new Error(`Error: connected to database! type:${(error as Error).message}`);
        });
}
