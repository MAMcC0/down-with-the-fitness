const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// import schema from Exercise.js
const exerciseSchema = require('./Exercise');

const workoutSchema = new Schema({
    wrkoutId: {
        type: String,
        required: true,
    },
    workoutName: {
        type: String,
        required: 'You need to name this workout!',
        minlength: 1,
        maxlength: 120,
        trim: true,
    },
    userCreated: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    link: {
        type: String,
    },
    // set savedExercises to be an array of data 
    //that adheres to the exerciseSchema
    savedExercises: [exerciseSchema],
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
