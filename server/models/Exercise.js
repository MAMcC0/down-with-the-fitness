const { Schema, model } = require('mongoose');

// This exercise schema initializes the exerciseName, description, 
// duration, bodyArea, workoutName, link, and image.
// This schema allows us to push pre-seeded data to the front-end 
// so that it may be rendered onto the page
const exerciseSchema = new Schema({
    exerciseName: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
        required: true,
    },
    description: {
        type: String,
        minlength: 1,
        maxlength: 280,
        required: true,
    },
    duration: {
        type: Number,
        minlength: 5,
        maxlength: 100,
        required: true
    },
    bodyArea: {
        type: String,
        required: true
    },
    workoutName: {
        type: String,
        required: true
    },
    link: {
        type: String,
    },
    img: {
        type: String,
    }
})
// defining an Exercise variable so it can be used in the resolvers/typeDefs
const Exercise = model('Exercise', exerciseSchema);
//exporting Exercise variable
module.exports = Exercise;