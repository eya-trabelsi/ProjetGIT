import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const testSchema = new Schema(
    {
        idUser: {
            type: String,
            required: true
        },
        idGame: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export default model('test', testSchema);