const { MongoClient } = require('mongodb');
require('dotenv').config();

const URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/Cookmaster`;
const DB_NAME = 'Cookmaster';

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connection = null;

module.exports = async () => {
  if (!connection) {
    connection = (await MongoClient.connect(
      URL,
      OPTIONS,
    )).db(DB_NAME);
  }
  
  return connection;
};
