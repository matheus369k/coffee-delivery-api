import mongoose from 'mongoose';

const coffee = new mongoose.Schema({
    slugs: {
        type: [String],
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
});

export const mongoDatabase = {
    Coffee: mongoose.model('coffee', coffee),
};
