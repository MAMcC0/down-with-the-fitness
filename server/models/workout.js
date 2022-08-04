const { Schema, model, Types } = require('mongoose');


const workoutSchema = new Schema({
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
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Exercise',
        },
    ],
});

const Workout = model('Workout', workoutSchema);

module.exports = Workout;
