const Planet = require('../models/Planet');


const index = async (req, res, next) => {
 res.json('Hello Wolrd')
  next();
};

module.exports = {
  index
};
