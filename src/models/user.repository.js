// import Mongoose from 'mongoose'
import RepositoryBuilder from 'sendit-mongoose-repository'

export const schemaDefinition = {
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  validateToken: {
    type: String,
  },
}

export const builder = RepositoryBuilder('User', schemaDefinition)
export default builder.Repository
