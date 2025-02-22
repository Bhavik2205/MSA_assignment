const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Pizza & Juice Finder API',
            version: '1.0.0',
            description: 'API to find nearby pizza and juice places using Overpass API.',
            contact: {
                name: 'Bhavik Patel',
                email: 'bhavik252patel@gmail.com'
            }
        },
    },
    apis: ['./src/routes/*.js'],
};
module.exports = swaggerJsdoc(options);
