const searchService = require('../services/overpassService');
exports.getPizzaPlaces = async (req, res) => {
    try {
        const { lat, lon } = req.query;
        if (!lat || !lon) {
            return res.status(400).json({ error: "Latitude and Longitude are required" });
        }
        const data = await searchService.searchPlaces('pizza', lat, lon);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getJuicePlaces = async (req, res) => {
    try {
        const { lat, lon } = req.query;
        if (!lat || !lon) {
            return res.status(400).json({ error: "Latitude and Longitude are required" });
        }
        const data = await searchService.searchPlaces('juice', lat, lon);
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getComboPlaces = async (req, res) => {
    try {
        const { lat, lon } = req.query;
        if (!lat || !lon) {
            return res.status(400).json({ error: "Latitude and Longitude are required" });
        }
        const pizzaData = await searchService.searchPlaces('pizza', lat, lon);
        const juiceData = await searchService.searchPlaces('juice', lat, lon);
        res.json([...pizzaData, ...juiceData]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};