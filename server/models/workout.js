const { Schema, model } = require('mongoose');


// import schema from Exercise.js
const exerciseSchema = require('./Exercise');

const workoutSchema = new Schema({
    workoutId: {
        type: Number,
        required: true,
    },
    workoutName: {
        type: String,
        required: 'You need to name this workout!',
        minlength: 1,
        maxlength: 120,
        trim: true,
    },
    workoutType: {
        type: String,
        required: true,
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
    // set savedExercises to be an array of data 
    //that adheres to the exerciseSchema
    exercises: [
        {
            type: Schema.Types.String,
            ref: 'Exercise',
        },
    ],
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
