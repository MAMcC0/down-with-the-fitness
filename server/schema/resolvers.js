const { Exercise, Workout } = require('../models');
const { User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    typeOfExercises: async (parent, { type }) => {
      return Exercise.find({ bodyArea: type });
    },
    fullBodyExercises: async () => {
      return Exercise.find({});
    },
    workouts: async () => {
      return Workout.find({});
    },
    listUserWorkouts: async (parent, { _id }) => {
      return User.findById({ _id }).populate({ path: 'Workout' }).populate({ path: 'Exercise' });
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


    user: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params)
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Whoops! Wrong email!')
      }

      const correctPass = await user.CorrectPassword(password);

      if (!correctPass) {
        throw new AuthenticationError('Whoops! Wrong password!')
      }
      const token = signToken(user);

      return { token, user }
    },

    deleteUser: async (parent, { _id }) => {
      const user = await User.destroy(
        { _id },
        { new: true }
      );
      return user;
    },
    updateUser: async (parent, { _id, password }) => {
      const user = await User.findOneAndUpdate(
        { _id },
        // { $inc: {`password`}:User},
        { new: true }
      );

      return user;
    }
  }
};


module.exports = resolvers;
