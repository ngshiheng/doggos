import { ApolloServer } from 'apollo-server';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import { resolvers } from './resolvers/queries';
import { typeDefs } from './schemas/schema';

const localServer = () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    server.listen().then(({ url }) => {
        console.log(`🐶  Server ready at ${url}`);
    });
};

export const lambdaServer = () => {
    return new ApolloServerLambda({
        typeDefs,
        resolvers,
        introspection: true,
        playground: true,
    });
};

localServer();
