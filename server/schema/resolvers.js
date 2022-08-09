const { AuthenticationError } = require('apollo-server-express');
const { Exercise, Workout } = require('../models');
const { User } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    // typeOfExercises: async (parent) => {
    //   return await Exercise.find();
    // },
    fullBodyExercises: async (parent) => {
      try {
        return await Exercise.find();
      }
      catch (err) {
        console.log(err);
      }
    },
    
    workouts: async (parent, { userCreated }) => {
      try {
        return await Workout.find({ userCreated: false }).populate({ path: 'exercises' });
      }
      catch (err) {
        console.log(err);
      }
    },

    specificWorkouts: async (parent, { workoutType, userCreated }) => {
      return Workout.find({$and: [{ workoutType: workoutType }, { userCreated: false }]}).populate( 'exercises' );
    },
    
    listUserWorkouts: async (parent, { workoutType, userCreated }) => {
      return Workout.find({$and: [{ workoutType: workoutType }, { userCreated: true }]}).populate( 'exercises' );    
    },

    findWorkOutByID: async (parent, {_id}) => {
      const liveWorkout = await Workout.find({_id}).populate({ path: 'exercises'});
      return liveWorkout;
    }

  },
  



  Mutation: {
    createWorkout: async (parent, { workoutInfo }, context) => {
      try {
        if (context.user) {
          const workoutData = await Workout.create(
            { workoutName: workoutInfo.workoutName, workoutType: workoutInfo.workoutType }
          )
          let updatedWorkoutData = await Workout.findOneAndUpdate(
            { _id: workoutData._id },
            { $push: { exercises: workoutInfo.exercises } },
            { new: true }
          ).populate('exercises')       
          const addtoUser = await User.findOneAndUpdate(
            {_id: context.user._id},
            { $push: {workouts:updatedWorkoutData._id}},
            { new: true }
          ).populate('workouts').populate({path: 'workouts', populate: 'exercises'})
          console.log(updatedWorkoutData);
          return addtoUser;
        }
      } catch (err) {
        console.log(err);
        throw new AuthenticationError('You need to be logged in!');
      }

    },
    removeWorkout: async (parent, { _id }, context) => {
      if (context.user) {
        const updatedWorkoutData = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { workouts: _id } },
          { new: true }
        ).populate('workouts').populate({path: 'workouts', populate: 'exercises'})
        return updatedWorkoutData;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Whoops! Wrong email!')
      }

      const correctPass = await user.isCorrectPassword(password);

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
        //  { $inc: {`password`}:User},
        { new: true }
      );

      return user;
    }
  }
};


module.exports = resolvers;
