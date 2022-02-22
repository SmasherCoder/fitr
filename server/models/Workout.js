
const { Schema, model } = require('mongoose');

const exerciseSchema = require('./Exercise');
const dateFormat = require('../utils/dateFormat');

const workoutSchema = new Schema(
    {
        description: {
            type: String,
            require: 'Please title your Workout Routine',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        },
        exercises: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Exercise'
            }
        ]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Workout = model('Workout', workoutSchema);

module.exports = Workout;