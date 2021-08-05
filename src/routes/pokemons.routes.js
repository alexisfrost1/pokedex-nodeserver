const express = require('express');
const router = express.Router();
const pokemonsModel = require('../models/pokemons.model');

/**
 * @swagger
 * /pokemons/:
 *  get:
 *    tags:
 *    - name: pokemons
 *    description: Get all pokemons
 *    responses:
 *      '200':
 *        description: Returns a list containing all pokemons.
 */
router.get('/', (req, res) => {
    pokemonsModel.getPokemons()
        .then(pokemons => {
            res.status(200).json({
                success: true,
                message: 'all pokemons.',
                pokemons
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: err.message
            });
        });
});

/**
 * @swagger
 * /pokemons/{pokemonId}:
 *  get:
 *    tags:
 *    - name: pokemon
 *    description: Get pokemon by id
 *    parameters:
 *    - in: path
 *      name: pokemonId
 *      schema: 
 *        type: number
 *        example: 1
 *      required: true
 *      description: Numerical id of pokemon to get
 *      responses:
 *        '200':
 *          description: Returns a pokemon for the given id.
 */
 router.get('/:pokemonId', (req, res) => {
    const pokemonId = req.params.pokemonId
    pokemonsModel.getPokemonsById(pokemonId)
        .then(pokemon => {
            res.status(200).json({
                success: true,
                message: 'one pokemon.',
                pokemon
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: err.message
            });
        });
});


/**
 * @swagger
 * /pokemons/{pokemonName}:
 *  get:
 *    tags:
 *    - name: pokemon
 *    description: Get pokemon by name
 *    parameters:
 *    - in: path
 *      name: pokemonName
 *      schema: 
 *        type: text
 *        example: pikachu
 *      required: true
 *      description: Name of pokemon to get
 *      responses:
 *        '200':
 *          description: Returns a pokemon for the given name.
 */
 router.get('/:pokemonName', (req, res) => {
    const pokemonName = req.params.pokemonName
    pokemonsModel.getPokemonsByName(pokemonName)
        .then(pokemon => {
            res.status(200).json({
                success: true,
                message: 'one pokemon.',
                pokemon
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: err.message
            });
        });
});
/**
 * @swagger
 * /pokemons/evolution-chain/{pokemonId}:
 *  get:
 *    tags:
 *    - name: pokemon
 *    description: Get pokemon by id
 *    parameters:
 *    - in: path
 *      name: pokemonId
 *      schema: 
 *        type: number
 *        example: 1
 *      required: true
 *      description: Numerical id of pokemon to get
 *      responses:
 *        '200':
 *          description: Returns a pokemon for the given id.
 */
 router.get('/evolution-chain/:pokemonId', (req, res) => {
    const pokemonId = req.params.pokemonId
    pokemonsModel.getEvoById(pokemonId)
        .then(evolution => {
            res.status(200).json({
                success: true,
                message: 'one pokemon.',
                evolution
            });
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: err.message
            });
        });
});
module.exports = router;