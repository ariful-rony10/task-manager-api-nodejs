const mongoose = require('mongoose');

const connectDb = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

// Export module
module.exports = connectDb;

//   .then(() => console.log('CONNECTED TO THE DB'))
//   .catch((err) => console.log(err));
