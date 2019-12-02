import { addClient } from '../use-cases'

import makePostClient from './post-client'

const postClient = makePostClient({ addClient })

const clientController = Object.freeze({
  postClient
})

export default clientController
export { postClient }
