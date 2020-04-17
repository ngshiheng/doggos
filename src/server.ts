import { ApolloServer } from 'apollo-server';
import { ApolloServer as ApolloServerLambda } from 'apollo-server-lambda';
import { resolvers } from './resolvers/queries';
import { typeDefs } from './schemas/schema';
import {
    DEFAULT_QUERY_BY_BREED,
    DEFAULT_QUERY_BY_SPECIFIC_BREED,
    DEFAULT_QUERY_BY_SUB_BREED,
    DEFAULT_QUERY_LIST_ALL_BREEDS,
    DEFAULT_QUERY_RANDOM_IMAGE,
} from './utils/consts';

const endpoint = 'https://dog-api.netlify.app/';

export const createLocalServer = () =>
    new ApolloServer({
        typeDefs,
        resolvers,
        uploads: false,
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

export const createLambdaServer = () =>
    new ApolloServerLambda({
        typeDefs,
        resolvers,
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
