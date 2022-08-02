const { Schema, model } = require('mongoose');

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
}
})

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;