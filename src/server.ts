import { ApolloServer } from 'apollo-server';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import { DogAPI } from './datasources/dogAPI';
import { resolvers } from './resolvers/queries';
import { typeDefs } from './schemas/schema';
import {
    DEFAULT_QUERY_BY_BREED,
    DEFAULT_QUERY_BY_SPECIFIC_BREED,
    DEFAULT_QUERY_BY_SUB_BREED,
    DEFAULT_QUERY_LIST_ALL_BREEDS,
    DEFAULT_QUERY_RANDOM_IMAGE,
} from './utils/consts';

const endpoint = 'https://doggos-api.netlify.app/';

export const createLocalServer = (): ApolloServer =>
    new ApolloServer({
        typeDefs,
        resolvers,
        dataSources: () => ({ dogAPI: new DogAPI() }),
        uploads: false,
        playground: {
            tabs: [
                {
                    endpoint: '',
                    name: 'List all breeds',
                    query: DEFAULT_QUERY_LIST_ALL_BREEDS,
                },
                {
                    endpoint: '',
                    name: 'Fetch a random dog image URL',
                    query: DEFAULT_QUERY_RANDOM_IMAGE,
                },
                {
                    endpoint: '',
                    name: 'Fetch all images by breed',
                    query: DEFAULT_QUERY_BY_BREED,
                },
                {
                    endpoint: '',
                    name: 'List all sub-breed',
                    query: DEFAULT_QUERY_BY_SUB_BREED,
                },
                {
                    endpoint: '',
                    name: 'Fetch image of a specific breed',
                    query: DEFAULT_QUERY_BY_SPECIFIC_BREED,
                },
            ],
        },
    });

export const createLambdaServer = (): ApolloServerLambda =>
    new ApolloServerLambda({
        typeDefs,
        resolvers,
        dataSources: () => ({ dogAPI: new DogAPI() }),
        uploads: false,
        introspection: true,
        playground: {
            tabs: [
                {
                    endpoint,
                    name: 'List all breeds',
                    query: DEFAULT_QUERY_LIST_ALL_BREEDS,
                },
                {
                    endpoint,
                    name: 'Fetch a random dog image URL',
                    query: DEFAULT_QUERY_RANDOM_IMAGE,
                },
                {
                    endpoint,
                    name: 'Fetch all images by breed',
                    query: DEFAULT_QUERY_BY_BREED,
                },
                {
                    endpoint,
                    name: 'List all sub-breed',
                    query: DEFAULT_QUERY_BY_SUB_BREED,
                },
                {
                    endpoint,
                    name: 'Fetch image of a specific breed',
                    query: DEFAULT_QUERY_BY_SPECIFIC_BREED,
                },
            ],
        },
    });
