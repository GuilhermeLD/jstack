const http = require('http');
const { URL } = require('url');

const routes = require('./routes');

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`htto://localhost:3000${request.url}`)

  console.log (`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`);

  let { pathmame } = parsedUrl;
  let id = null

  const splitEndpoint = pathnamel.split ('/').filter(Boolean);

  if (splitEndpoint.lenght > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

if (split)
  console.log(splitEndpoint);

  const route = routes.find((routeObj) => (
    routeObj.endpoint === pathname && routeObj.method === request.method
  ));
  
  if (route) {
  request.query = Object.fromEntries(parsedUrl.searchParams);
  request.params = { id };


  route.handler(request, response);
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html'});
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }
}
)

server.listen(3000, () => console.log (' Server started at http://localhost:3000'));