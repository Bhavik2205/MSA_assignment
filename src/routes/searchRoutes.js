
/**
 * @swagger
 * /search/pizza:
 *   get:
 *     name: RESTful API
 *     summary: Get nearby pizza places
 *     description: Retrieve a list of pizza places near the given coordinates.
 *     parameters:
 *       - in: query
 *         name: lat
 *         required: true
 *         schema:
 *           type: number
 *       - in: query
 *         name: lon
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: A list of pizza places
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   address:
 *                     type: string
 *                   rating:
 *                     type: number
 */

/**
 * @swagger
 * /search/juice:
 *   get:
 *     name: RESTful API
 *     summary: Get nearby juice places
 *     description: Retrieve a list of juice places near the given coordinates.
 *     parameters:
 *       - in: query
 *         name: lat
 *         required: true
 *         schema:
 *           type: number
 *       - in: query
 *         name: lon
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: A list of juice places
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   address:
 *                     type: string
 *                   rating:
 *                     type: number
 */

/**
 * @swagger
 * /search/combo:
 *   get:
 *     name: RESTful API
 *     summary: Get nearby pizza and juice places
 *     description: Retrieve a list of both pizza and juice places near the given coordinates.
 *     parameters:
 *       - in: query
 *         name: lat
 *         required: true
 *         schema:
 *           type: number
 *       - in: query
 *         name: lon
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: A list of both pizza and juice places
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                   address:
 *                     type: string
 *                   rating:
 *                     type: number
 */

const express = require('express');
const { getPizzaPlaces, getJuicePlaces, getComboPlaces } = require('../controllers/searchController');
const router = express.Router();

router.get('/pizza', getPizzaPlaces);
router.get('/juice', getJuicePlaces);
router.get('/combo', getComboPlaces);

module.exports = router;