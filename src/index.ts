import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers/queries';
import { typeDefs } from './schemas/schema';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
