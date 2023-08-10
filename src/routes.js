const UserController = require('./controllers/UserController')

module.exports = [
  {
    endpoint: '/user',
    method: 'GET',
    handler: UserController.listUsers,
  },
  {
    endpoint: '/user',
    method: 'GET',
    handler: UserController.getUserById,
  },
];