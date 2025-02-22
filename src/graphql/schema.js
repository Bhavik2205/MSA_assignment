const { gql } = require('apollo-server-express');
module.exports = gql`
    type Place {
        name: String
        address: String
        rating: Float
    }
    type Query {
        searchPizza(lat: Float!, lon: Float!): [Place]
        searchJuice(lat: Float!, lon: Float!): [Place]
        searchCombo(lat: Float!, lon: Float!): [Place]
    }
`;