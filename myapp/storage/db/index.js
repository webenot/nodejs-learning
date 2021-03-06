const logger = require('logger').logger;
const config = require('config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = mongoose.connection;

module.exports = db;
module.exports.disconnect = mongoose.disconnect;

module.exports.init = () => {
  return new Promise((resolve, reject) => {

    mongoose.connect(config.get('db:uri'), config.get('db:connect'));

    db.once('error', err => {
      reject(err);
    });

    db.once('open', () => {
      db.on('error', err => {
        logger.error(err);
      });

      resolve();
    });
  });
};
