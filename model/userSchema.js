import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        username: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
        },
        phonenumber: {
            type: String,
            required: false,
            unique: true,
            trim: true,
            validate: {
                validator: function (value) {
                    return !value || /^\d{10}$/.test(value);
                },
                message: 'Phone number must be 10 digits.',
            },
        },
        designation: {
            type: String,
            required: true,
            trim: true,
        },
        employeeId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
    },
    {
        timestamps: false,
        collection: 'users',
    }
);

export const UserModel = mongoose.model('User', userSchema);
