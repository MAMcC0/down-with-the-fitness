const { Exercise, Workout } = require('../models');

const resolvers = {
  Query: {
    exercise: async () => {
      return Exercise.find({});
    },
    workout: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Workout.find(params);
    },
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
  },
};

module.exports = resolvers;
