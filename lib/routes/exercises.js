const { Router } = require('express');
const Exercise = require('../models/Exercise');

module.exports = Router()
  .post('/', (req, res, next) => {
    Exercise  
      .create(req.body)
      .then(exercise => res.send(exercise))
      .catch(next);
  });


