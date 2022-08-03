const db = require('../config/connection');

const { Users, Workouts, Exercises } = require('../models')
const { exercises, workouts, users } = require('../seeds')

db.once('open', async () => {

  const seedDatabase = await

    Exercises.insertMany(exercises).then(() => {
      Workouts.insertMany(workouts).then(() => {
        Users.insertMany(users).then(() => {

          console.log('All Seeds Planted');
          process.exit(0);

        });
      });
    });
});
