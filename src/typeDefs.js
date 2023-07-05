import { gql } from 'apollo-server-express';


export const typeDefs = gql`
        type Query {
                hello: String!
                cats: [Cat!]!
            }

        type Cat {
            id: ID!
            name: String!
        }

        input CatInput{
            id: String!
            name: String!
        }   

        type Mutation {
            createCat(name: String!): Cat!
            updateCat(CatInput: CatInput!): Cat!
            removeCat(id: String!): Cat!
        }    
`;