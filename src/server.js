const http = require('http'); 
const responses = require('./responses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request)
  {
    case "/":
      responses.getIndex(request, response);
      break;

    case "/client2":
      responses.getClient2(request, response);
      break;

    default:
      responses.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
