const fetch = require('sync-fetch')

let usersModel = {};

usersModel.getUsers = () => {
  return pool.query('SELECT * FROM user;');
}

usersModel.createUser = (newUser) => {
  return pool.query('INSERT INTO user SET ?', [user]);
}

module.exports = usersModel;