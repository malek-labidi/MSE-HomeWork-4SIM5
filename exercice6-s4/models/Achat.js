import mongoose from "mongoose";
const { Schema, model } = mongoose;

const achatSchema = new Schema({
    user:
    {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    
    game: 
    {
        type: Schema.Types.ObjectId,
        ref: 'Game',
        required: true,
    },
    boughtDate:

    {
        type: Date,
        required: true,
    },
    
});

export default model('Achat', achatSchema);