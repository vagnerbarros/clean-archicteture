export default function makePostClient ({ addClient }) {
  return async function postClient (httpRequest) {
    try {
      const { ...clientInfo } = httpRequest.body
      const clientSaved = await addClient({ ...clientInfo })
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 201,
        body: { clientSaved }
      }
    } catch (erro) {
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 400,
        body: {
          error: erro.message
        }
      }
    }
  }
}
