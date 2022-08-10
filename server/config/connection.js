const mongoose = require('mongoose');
//established connection to mongo
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fitnessdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//export mongo connection
module.exports = mongoose.connection;
