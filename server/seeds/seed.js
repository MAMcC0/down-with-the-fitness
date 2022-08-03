const db = require('../config/connection');

const users = require('./users.json')
const wrkoutGroups = require('./wrkoutGroups.json');

db.once('open', async () => {
 // await ???.deleteMany({});

  //const exercises = await ???.insertMany(wrkoutGroups);

  console.log('exercises seeded!');
  process.exit(0);
});