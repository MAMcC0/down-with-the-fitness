//importing data
const { AuthenticationError } = require('apollo-server-express');
const { Exercise, Workout } = require('../models');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

// an object that hold both Queries and Mutations
const resolvers = {
  //The Query object that hold user, me, fullBodyExercises, workouts, specificWorkouts,
  // listAllStandardWorkouts, listAllWorkouts, listAllUserWorkouts, & findWorkoutById.
  Query: {
    //User query that grabs the username and finds a username
    user: async (parent, { username }) => {
      // We are populating the path workouts and exercises to get the workouts array that hold the exercises array
      return User.findOne({ username }).populate({path: 'workouts', populate: {path: 'exercises'}});
    },
    //Me(user) query that grabs the user context and checks if there is user context so that it may be populated
    me: async (parent, args, context) => {
      if (context.user) {
         // We are populating the path workouts and exercises to get the workouts array that hold the exercises array
        return User.findOne({ _id: context.user._id }).populate({path: 'workouts', populate: {path: 'exercises'}});
      }
      //throw error
      throw new AuthenticationError('You need to be logged in!');
    },
    // query to find all of the exercises
    fullBodyExercises: async (parent) => {
      try {
        //uses find() in order to return every exercise
        return await Exercise.find();
      }
      //error handling
      catch (err) {
        console.log(err);
      }
    },
    // query to find and return all of the workouts in the database
    // along with the exercises linked to the workouts
    workouts: async (parent) => {
      try {
        //uses find() in order to return every workout and exercise linked
        return await Workout.find().populate({ path: 'exercises' });
      }
      //error handling
      catch (err) {
        console.log(err);
      }
    },
    // query to return workouts based on a specific workoutType
    specificWorkouts: async (parent, { workoutType, userCreated }) => {
      //finds all of the workouts with userCreated set to false and populated the exercises within those workouts
      return Workout.find({$and: [{ workoutType: workoutType }, { userCreated: false }]}).populate( 'exercises' );
    },
    // query to return all of the standard workouts
    listAllStandardWorkouts: async (parent, { userCreated }) => {
      //finds all of the standard workouts with userCreated set to false and populated the exercises 
      //within those workouts
      return Workout.find( { userCreated: false } ).populate( 'exercises' );    
    },
    // query to return all of the user workouts
    listAllUserWorkouts: async (parent, { userCreated }) => {
      //finds all of the workouts with userCreated set to true and populated the exercises within those workouts
      return Workout.find( { userCreated: true } ).populate( 'exercises' );    
    },
    // query to return user workouts based on a specific workoutType
    listUserWorkouts: async (parent, { workoutType, userCreated }) => {
      //finds all of the workouts with userCreated set to true and populated the exercises within those workouts
      return Workout.find({$and: [{ workoutType: workoutType }, { userCreated: true }]}).populate( 'exercises' );    
    },
    // query to return workouts based on a specific id
    findWorkOutByID: async (parent, {_id}) => {
      //finds all of the workouts by id and populated the exercises 
      //within those workouts
      const liveWorkout = await Workout.find({_id}).populate({ path: 'exercises'});
      return liveWorkout;
    }

  },
  
//Mutations that include: createWorkout, removeWorkout, creatUser, login,
// deleteUser, updateUser
  Mutation: {
    // mutation to create a workout based on the workoutInfo that the user
    // gives, taken from the front-end
    createWorkout: async (parent, { workoutInfo }, context) => {
      try {
        //checks if there is context
        if (context.user) {
          //creates workoutData which holds workoutName & workoutType
          const workoutData = await Workout.create(
            { workoutName: workoutInfo.workoutName, workoutType: workoutInfo.workoutType }
          )
          //updated the workout to include the one that was just created
          // and pushes the exercises to the workout arrays
          let updatedWorkoutData = await Workout.findOneAndUpdate(
            { _id: workoutData._id },
            { $push: { exercises: workoutInfo.exercises } },
            { new: true }
          ).populate('exercises')      
           //updated the workout to the link to the user to include the one 
           //that was just created and pushes the exercises to the workout arrays
          const addtoUser = await User.findOneAndUpdate(
            {_id: context.user._id},
            { $push: {workouts:updatedWorkoutData._id}},
            { new: true }
          ).populate('workouts').populate({path: 'workouts', populate: 'exercises'})
          return addtoUser;
        }
        //error handling
      } catch (err) {
        console.log(err);
        throw new AuthenticationError('You need to be logged in!');
      }

    },
    // mutation to remove a workout based on the id of that workout
    removeWorkout: async (parent, { _id }, context) => {
      //checks if there is context
      if (context.user) {
          //updated the workout to remove 
          // and pull the workout out
        const updatedWorkoutData = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { workouts: _id } },
          { new: true }
        ).populate('workouts').populate({path: 'workouts', populate: 'exercises'})
        return updatedWorkoutData;
      }
        //error handling
      throw new AuthenticationError('You need to be logged in!');
    },
    // mutation to create a user
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    // mutation to login a user
    login: async (parent, { email, password }) => {
      //find users by email
      const user = await User.findOne({ email });
      //checks auth
      if (!user) {
        throw new AuthenticationError('Whoops! Wrong email!')
      }

      const correctPass = await user.isCorrectPassword(password);
      //checks if correct password
      if (!correctPass) {
        throw new AuthenticationError('Whoops! Wrong password!')
      }
      const token = signToken(user);

      return { token, user }
    },
    // mutation to delete a user
    deleteUser: async (parent, { _id }) => {
      // destroys user based on id
      const user = await User.destroy(
        { _id },
        { new: true }
      );
      return user;
    },
  }
};
//export resolvers
module.exports = resolvers;
