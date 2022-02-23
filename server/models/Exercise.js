const mongoose = require('mongoose');
const { Schema } = mongoose;
const dateFormat = require('../utils/dateFormat')

const exerciseSchema = new Schema(
    {
      exerciseBody: {
        type: String,
        required: true,
        maxlength: 280
      },
      username: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );
  
  module.exports = exerciseSchema;

  const Exercise = mongoose.model('Exercise', exerciseSchema);

  module.exports = Exercise