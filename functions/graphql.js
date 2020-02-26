const { createLambdaServer } = require('./bundle/server');

const GraphQLServer = createLambdaServer();

exports.handler = GraphQLServer.createHandler({
    cors: {
        origin: '*',
    },
});
