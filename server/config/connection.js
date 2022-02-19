const mongoose = require('mongoose');

mongoose.connect(
// change localhost link later
  process.env.MONGODB_URI || 'mongodb://localhost:27017/deep-thoughts',
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;