const axios = require('axios');
exports.searchPlaces = async (query, lat, lon) => {
    const queryMap = {
        pizza: 'node["amenity"="restaurant"]["cuisine"="pizza"]',
        juice: 'node["amenity"="cafe"]["cuisine"="juice"]'
    };
    const url = `${process.env.OVERPASS_API_URL}?data=[out:json];${queryMap[query]}(around:5000,${lat},${lon});out;`;
    try {
        const response = await axios.get(url);
        return response.data.elements.map(el => ({
            name: el.tags.name || 'Unknown',
            address: `Lat: ${el.lat}, Lon: ${el.lon}`,
            rating: Math.random() * 5,
        }));
    } catch (error) {
        throw new Error('Error fetching data from Overpass API');
    }
};