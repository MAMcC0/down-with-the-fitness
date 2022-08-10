const { Schema, model, Types } = require('mongoose');

// This Workout schema initializes the workoutName, workoutType,
// userCreated, createdAt, and exercise array.
// This schema allows us to push pre-seeded data to the front-end 
// so that it may be rendered onto the page
const workoutSchema = new Schema({
    workoutName: {
        type: String,
        required: true,
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
        default: true,
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
// defining an Workout variable so it can be used in the resolvers/typeDefs
const Workout = model('Workout', workoutSchema);
//exporting Workout variable
module.exports = Workout;
