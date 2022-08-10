const db = require('../config/connection');

const { User, Workout, Exercise } = require('../models')
const exercises = require('./exercises.json');
const workouts = require('./workouts.json');
const usersSeeds = require('./users.json');

db.once('open', async () => {
  //deletes seeds if they exists
    await User.deleteMany({})
    await Workout.deleteMany({})
    await Exercise.deleteMany({})
    //creates user seeds
    const users = await User.create(usersSeeds)

    //loops through and for each workout creates a workout,
    //exerciseSeeds are randomized for workouts
    for (let i = 0; i < workouts.length; i++) {
        const { _id } = await Workout.create(workouts[i]);      
        const exerciseSeeds = await User.findOneAndUpdate(
          { _id: users[Math.floor(Math.random()* users.length)]._id },
          {
            $addToSet: {
                workouts: _id,
            },
          }
        );
      }
      //exercises are created and workouts are updated to have those exercieses
    for (let i = 0; i < exercises.length; i++) {
        const { _id, workoutName } = await Exercise.create(exercises[i]);     
        const exerciseSeeds = await Workout.findOneAndUpdate(
          { workoutName: workoutName },
          {
            $addToSet: {
                exercises: _id,
            },
          }
        );
      }
    console.log("Seeds planted!")
    process.exit(0);


});
