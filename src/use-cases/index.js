import makeAddClient from './add-client'
import clientDb from '../data-acess'

const addClient = makeAddClient({ clientDb })

const clientService = Object.freeze({
  addClient
})

export default clientService
export { addClient }
