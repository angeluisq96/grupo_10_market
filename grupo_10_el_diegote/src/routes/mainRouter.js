// Acá nos falta express y el router

const express = require('express');

const router = express.Router();

const app = express();

const mainController = require('../controllers/mainController')

router.get('/', mainController.index);

router.get('/details', mainController.productDescription);

router.get('/login', mainController.login);

router.get('/register', mainController.register);

router.get('/kart', mainController.shoppingKart);

module.exports = router