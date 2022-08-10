const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// This User schema initializes the username, email, password,
// and an array of workouts.
// This schema allows us to push pre-seeded data to the front-end 
// so that it may be rendered onto the page
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    workouts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Workout',
        },
    ],
});

//This function allows us to hash the users password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// Here we check in the user password and bcrypt password 
// are the same
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};
// defining an User variable so it can be used in the resolvers/typeDefs
const User = model('User', userSchema);
//exporting User variable
module.exports = User;
