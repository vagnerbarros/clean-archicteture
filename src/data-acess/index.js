
export default function makeClientDb ({ makeDb }) {
  return Object.freeze({
    insert
  })

  async function insert ({ ...clientInfo }) {
    const db = await makeDb()
    const result = await db.collection('clients').insertOne({ ...clientInfo })
    const { ...insertedInfo } = result.ops[0]
    return { ...insertedInfo }
  }
}
