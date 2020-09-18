const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema;

const planetSchema = new Schema({
  author: ObjectId,
  name: {
    type: String,
    required: true,
  },
  climate: {
    type: String,
    required: true,
  },
  terrain: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Planet', planetSchema);
