const db = require('../config/connection');

const { User, Workout, Exercise } = require('../models')
const exercises = require('./exercises.json');
const workouts = require('./workouts.json');
const users = require('./users.json');

db.once('open', async () => {
    await User.deleteMany({})
    await Workout.deleteMany({})
    await Exercise.deleteMany({})
    await Exercise.insertMany(exercises)
     await Workout.insertMany(workouts)
      await User.insertMany(users)
      console.log("Seeds planted!")
      process.exit(0);
     
    
});
