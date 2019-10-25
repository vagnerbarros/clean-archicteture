const express = require('express');
const bodyParser = require('body-parser');
const handlerClient = require('./entities');
const adaptRequest = require('./util/adapter-request');

const app = express();
app.use(bodyParser.json());

app.all('/clients', clientsController);
app.get('/clients/:id', clientsController);

function clientsController(req, res){
  const httpRequest = adaptRequest(req);
  handlerClient(httpRequest)
  .then(({ headers, statusCode, data }) => {
    res.set(headers).status(statusCode).send(data);
  })
  .catch(e => {
    res.status(500).end();
  });
}

app.listen(3000, () => console.log('Listening on port 3000'));