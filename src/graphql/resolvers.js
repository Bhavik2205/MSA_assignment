const searchService = require('../services/overpassService');
module.exports = {
    Query: {
        searchPizza: (_, { lat, lon }) => searchService.searchPlaces('pizza', lat, lon),
        searchJuice: (_, { lat, lon }) => searchService.searchPlaces('juice', lat, lon),
        searchCombo: async (_, { lat, lon }) => {
            const pizza = await searchService.searchPlaces('pizza', lat, lon);
            const juice = await searchService.searchPlaces('juice', lat, lon);
            return [...pizza, ...juice];
        }
    }
};
