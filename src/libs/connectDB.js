import { mongodb } from 'config'
import { MongoClient } from 'mongodb'
const { url, port, dbname, username, password } = mongodb
const connectModule = {}
let conn

connectModule.connect = async () => {
  try {
    conn = await MongoClient.connect(`mongodb://${username}:${password}@${url}:${port}/${dbname}`, { useNewUrlParser: true })
    return await conn.db(dbname)
  } catch(e) {
    console.log('connection error: ', e)
    return null
  }
}

connectModule.get = () => {
  return conn.db(dbname)
}

connectModule.closeConnect = () => {
  return conn.close()
}

connectModule.connect(() => {})
export default connectModule