import { gql } from 'apollo-server';

export const typeDefs = gql`
    type Data {
        message: String!
        status: String!
    }

    type Breeds {
        message: [String!]!
        status: String!
    }

    type SubBreeds {
        message: [String!]!
        status: String!
    }

    type Query {
        listAllBreeds: [String!]!
        randomImage: Data!
        byBreed: Breeds!
        bySubBreed: SubBreeds!
        breed(type: String!): Data!
    }
`;
