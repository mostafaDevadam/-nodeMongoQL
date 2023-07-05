
import { gql } from 'apollo-server-express';
import { CatModel } from './models/cat.model';

export const resolvers = {
    Query: {
        hello: () => "hallo",
        cats: () => CatModel.find()

    },
    Mutation: {
        createCat: async (_, { name }) => {
            const kitty = new CatModel({ name: name });
            await kitty.save();
            console.log('kitty: ', kitty);
            return kitty;
        },
        updateCat: async (_, { CatInput:{id, name} }) => {
            console.log('args: ', id, ', name: ', name);
            const nkitty = await CatModel.findByIdAndUpdate(id, { $set: { name: name } });
            console.log('updated nkitty: ', nkitty);
            return nkitty;
        },
        removeCat: async (_, { id }) => {
            const kit = await CatModel.deleteOne({_id: id});
            console.log('removed kit : ', kit);
            return id;
        }
    }
}