/* eslint-disable no-underscore-dangle */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable default-case */
/* eslint-disable no-param-reassign */

const handleError = (req, res, err, cb) => {
  err._message = undefined;
  const messages: any[] = [];
  switch (err.name) {
    case 'MongoError':
      if (err.code === 11000) {
        err.statusCode = 400;
      }
      break;

    case 'ValidationError':
      err.statusCode = 400;
      for (const name in err.errors) {
        messages.push({ message: err.errors[name].message });
      }
      err.message = 'Validation error while processing your request';
      err.errors = messages;
      break;
  }
  return cb();
};

export = handleError; 
