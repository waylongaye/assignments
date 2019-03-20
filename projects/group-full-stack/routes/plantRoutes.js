const express = require('express');

const plantRoute = express.Router();

const Plant = require('../models/plantSchema');

plantRoute.route('/')