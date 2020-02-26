import { ApolloServer } from 'apollo-server';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import { resolvers } from './resolvers/queries';
import { typeDefs } from './schemas/schema';

export const createLocalServer = () =>
    new ApolloServer({
        typeDefs,
        resolvers,
        uploads: false,
    });

export const createLambdaServer = () =>
    new ApolloServerLambda({
        typeDefs,
        resolvers,
        uploads: false,
        introspection: true,
        playground: true,
    });
