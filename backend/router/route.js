const express = require('express')
const route = express.Router()
const movieRouter = require('../model/movieModels')

route.get('/',movieRouter.movieModels)

module.exports = route