const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const searchRoutes = require('./src/routes/searchRoutes');
const typeDefs = require('./src/graphql/schema');
const resolvers = require('./src/graphql/resolvers');
const rateLimiter = require('./src/middleware/rateLimiter');
const errorHandler = require('./src/middleware/errorHandler');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/utils/swagger');
const logger = require('./src/utils/logger');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(rateLimiter);
app.use('/search', searchRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(errorHandler);

const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => {
    server.applyMiddleware({ app });
    if (require.main === module) {
        app.listen(3000, () => logger.info('Server running on port 3000'));
    }
}).catch(error => {
    logger.error(`Error starting server: ${error.message}`);
});

module.exports = app;