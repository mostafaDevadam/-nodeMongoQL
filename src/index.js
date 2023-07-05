import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
const app = express();
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
//
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers'




// config
dotenv.config();
const db = process.env.DB_CONNECT;
const port = process.env.PORT;



const startServer = async () => {

    //
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });


    server.applyMiddleware({ app });


    // mongoose
    mongoose.connect(db, { useNewUrlParser: true }, () => {
        console.log('db is connected');
    });


    app.listen({ port: port }, () => {
        console.log(` Server read at http://localhost:port${server.graphqlPath}`);

    })

}


//
startServer();
