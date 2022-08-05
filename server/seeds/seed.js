const db = require('../config/connection');

const { User, Workout, Exercise } = require('../models')
const exercises = require('./exercises.json');
const workouts = require('./workouts.json');
const usersSeeds = require('./users.json');

db.once('open', async () => {
    await User.deleteMany({})
    await Workout.deleteMany({})
    await Exercise.deleteMany({})
    const users = await User.create(usersSeeds)
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
