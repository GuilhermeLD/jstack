const user = require('../mocks/users');

module.exports = {
  listUser(request, response) {
    const { order } = request.query;

const sortedUser = user.sort((a, b) => {
  if (order === 'desc') {
    return a.id < b.id ? 1 : -1;
  }

return a.id > b.id ? 1 : -1;
});

  response.writeHead(200, {'Content-Type': 'application/json' });
  responde.end(JSON.stringify({sortedUser}));


}






},

getUserById (request, response) {
  const { id } = request.params;

  response.writeHead(200, {'Content-Type': 'application/json' });
  responde.end(JSON.stringify({ ok: true}));

}
