const makeClient = require('./client');

module.exports = function makeClientList( { database } ){
  return Object.freeze({
    add,
    findById,
    list,
    remove,
    update
  });

  async function add(client){

    const db = await database;
    const { result, ops } =  db.insert(client);
    return {
      sucess: result.ok === 1,
      created: documentToClient(ops[0])
    }
  }

  async function findById({ idClient }){
    
    const db = await database;
    const found = db.find({ _id: idClient });
    if(found){
      return documentToClient(found);
    }
    return null;
  }
  
  async function list(){

    const db = await database;
    return await db.find({}).map(documentToClient);
  }

  async function remove({ clientId }){

    const db = await database;
    const { result } = await db.remove(clientId);
    return result;
  }

  async function update(cliente){
    // todo: 
  }
  
  function documentToClient({ _id: clientId, ...doc }){
    return makeClient({ clientId, ...doc });
  }
}