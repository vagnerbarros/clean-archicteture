const makeDb = require('../database');
const makeClientList = require('./client-list');
const makeClientEndpointHandler = require('./client-endpoint');

const database = makeDb();
const clientList = makeClientList({ database });
const clientEndpointHandler = makeClientEndpointHandler({ clientList });

module.exports = clientEndpointHandler;