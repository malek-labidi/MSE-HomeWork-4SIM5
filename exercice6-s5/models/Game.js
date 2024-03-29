import mongoose from "mongoose";
const { Schema, model } = mongoose;

const gameSchema = new Schema({
    title:
    {
        type: String,
        required: true,
    },
    
    description: 
    {
        type: String,
        required: true,
    },
    quantity:

    {
        type: Number,
        required: true,
    },
    
    price:  {
        type: Number,
        required: true,
    },
});

export default model('Game', gameSchema);
