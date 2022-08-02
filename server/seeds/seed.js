const db = require('../config/connection');
//const { ?? } = require('../models');

const wrkoutGroups = require('./wrkoutGroups.json');

db.once('open', async () => {
 // await ???.deleteMany({});

  //const exercises = await ???.insertMany(wrkoutGroups);

  console.log('exercises seeded!');
  process.exit(0);
});