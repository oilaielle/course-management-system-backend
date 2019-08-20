import RepositoryBuilder from 'sendit-mongoose-repository'

export const schemaDefinition = {
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  nickname: {
    type: String,
  },
  birthday: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ['student', 'instructor'],
  },
}

export const builder = RepositoryBuilder('User', schemaDefinition)
export default builder.Repository
