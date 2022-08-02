const { Exercise, Workout } = require('../models');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        typeOfExercises: async (parent, {type}) => {
            return Exercise.find({bodyArea: type});
        },
        fullBodyExercises: async () => {
            return Exercise.find({});
        },
        workouts: async () => {
            return Workout.find({});
        },
        listUserWorkouts: async (parent, { _id }) => {
            return User.findById({ _id }).populate({path: 'Workout'}).populate({path: 'Exercise'});
        }
    },
    Mutation: {
        createWorkout: async (parent, { wrkoutData }, context) => {
            if (context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedExercises: wrkoutData } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        removeWorkout: async (parent, { wrkoutId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { savedExercises: { wrkoutId } } },
                    { new: true }
                );
                return updatedUser;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
};

module.exports = resolvers;
