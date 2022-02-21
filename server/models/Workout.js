
const { Schema, model } = require('mongoose');

const exerciseSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const workoutSchema = newSchema(
    {
        workoutText: {


            type: String,
             require: 'Please title your Workout Routine',
             minlength: 1,
             maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormta(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        exercise: [exerciseSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }

);

const Workout = model('Workout', workoutSchema);

module.exports = Workout;