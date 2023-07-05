import mongoose from 'mongoose';

const CatSchema = new mongoose.Schema({
    name: { type: String, required: true}
});

export const  CatModel = mongoose.model('Cat', CatSchema);