import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'dns';
dotenv.config();

dns.setServers(['8.8.8.8', '8.8.4.4']);
const mongoUri = process.env.MONGODB_URI;

export const connect = async () => {
    try {
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB successfully.');
    } catch (error) {
        console.error('Unable to connect to MongoDB:', error);
        process.exit(1);
    }
};
