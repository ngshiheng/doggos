const { createLambdaServer } = require('./bundle/index');

const GraphQLServer = createLambdaServer();

exports.handler = GraphQLServer.createHandler({
    cors: {
        origin: '*',
    },
});
