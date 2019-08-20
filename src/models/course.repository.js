import RepositoryBuilder from 'sendit-mongoose-repository'

export const schemaDefinition = {
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  subject: {
    type: String,
  },
  startTime: {
    type: Date,
  },
  endTime: {
    type: Date,
  },
  numberOfStudent: {
    type: Number,
  },
}

export const builder = RepositoryBuilder('Course', schemaDefinition)
export default builder.Repository
