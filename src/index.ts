import { ApolloServer } from 'apollo-server';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import { resolvers } from './resolvers/queries';
import { typeDefs } from './schemas/schema';

const localServer = () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        uploads: false,
    });
    server.listen().then(({ url }) => {
        console.log(`🐶  Server ready at ${url}`);
    });
};

export const createLambdaServer = () => {
    return new ApolloServerLambda({
        typeDefs,
        resolvers,
        uploads: false,
        introspection: true,
        playground: true,
    });
};

localServer();
