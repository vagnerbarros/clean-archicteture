import makeClient from '../entites/client'

export default function makeAddClient ({ clientDb }) {
  return async function addClient (clientInfo) {
    const client = makeClient(clientInfo)
    const exists = await clientDb.findByCpf({ cpf: client.getCpf() })
    if (exists) {
      return exists
    }

    return clientDb.insert({
      cpf: client.getCpf(),
      name: client.getName(),
      age: client.getAge(),
      isDeleted: client.isDeleted(),
      createdOn: client.getCreatedOn()
    })
  }
}
