const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/api/mockData.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running')
});
