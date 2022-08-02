const { AuthenticationError } = require('apollo-server-express');
const { Exercise, Workout, User } = require('../models');

const resolvers = {
  Query: {
    exercise: async () => {
      return Exercise.find({});
    },
    workout: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Workout.find(params);
    },
    user: async (parent,  { _id } ) => {
      const params = _id ? { _id } : {};
      return User.find(params)
    }
  },
  Mutation: {
    createWorkout: async (parent, args) => {
      const workout = await Workout.create(args);
      return workout;
    },
    //---- maybe will be used in the future idk? (will see tmrw)
    // createVote: async (parent, { _id, techNum }) => {
    //   const vote = await Matchup.findOneAndUpdate(
    //     { _id },
    //     { $inc: { [`tech${techNum}_votes`]: 1 } },
    //     { new: true }
    //   );
    //   return vote;
    // },
    createUser: async (parent, args) => {
      const user = await User.create({username, email, password});
      const token = signToken(user)
      return {token, user};
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Whoops! Wrong email!')
      }

      const correctPass = await user.CorrectPassword(password);

      if(!correctPass){
        throw new AuthenticationError('Whoops! Wrong password!')
      }
      const token = signToken(user);

      return { token, user}
    },

    deleteUser: async (parent, { _id }) => {
      const user = await User.destroy(
        { _id },
        { new: true }
      );
      return user;
    },
    updateUser: async (parent, {_id, password }) => {
      const user = await User.findOneAndUpdate(
        { _id },
        // { $inc: {`password`}:User},
        { new: true}
      );

      return user;
    }
  },
};

module.exports = resolvers;
