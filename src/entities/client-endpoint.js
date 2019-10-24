const { InvalidPropertyError, RequiredParameterError } = require('../util/errors');
const makeHttpError = require('../util/http-error');
const makeClient = require('./client');

module.exports = function makeClientEndpointHandler({ clientList }){

  return async function handle(httpRequest){
    switch(httpRequest.method){
      case 'POST': 
        return postClient(httpRequest);
      case 'GET':
        return getClients(httpRequest);
      default:
        return makeHttpError({
          statusCode: 405,
          errorMessage: `${httpRequest.method} method not allowed.`
        });
    }
  }

  async function postClient(httpRequest){

    let clientInfo = httpRequest.body;
    if(!clientInfo){
      return makeHttpError({
        statusCode: 400,
        errorMessage: 'Bad request. No POST body'
      });
    }

    if(typeof httpRequest.body === 'string'){
      try{
        clientInfo = JSON.parse(clientInfo);
      }
      catch{
        return makeHttpError({
          statusCode: 400,
          errorMessage: 'Bad request. POST body must be valid JSON'
        });
      }
    }

    try{

      const client = makeClient(clientInfo);
      const result = await clientList.add(client);

      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 201,
        data: JSON.stringify(result)
      };
    }
    catch(e){
      return makeHttpError({
        errorMessage: e.message,
        statusCode: e instanceof InvalidPropertyError || e instanceof RequiredParameterError ? 400 : 500
      });
    }
  }

  async function getClients(httpRequest){

    const { id } = httpRequest.pathParams || {};

    const result = id ? await clientList.findById({ idClient: id }) : await clientList.list();
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      statusCode: 200,
      data: JSON.stringify(result)
    }
  }
};