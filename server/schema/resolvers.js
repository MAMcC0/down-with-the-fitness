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
      const user = await User.create(args, {new : true});
      return user;
    },
    deleteUser: async (parent, { _id }) => {
      const user = await User.destroy(
        { _id },
        { new: true }
      );
      return user;
    },
    updateUser: async (parent, {_id, workoutName }) => {
      const user = await User.findOneAndUpdate(
        { _id },
        { $inc: { [`workout${workoutName}`] : Exercise} },
        { new: true}
      );

      return user;
    }
  },
};

module.exports = resolvers;
