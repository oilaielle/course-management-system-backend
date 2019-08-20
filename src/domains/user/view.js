import userRepository from '../../models/user.repository'
import { findOneIfNotExistThrowError } from '../../utils/domain'

export default async id => {
  const data = await findOneIfNotExistThrowError(userRepository, { _id: id })
  return data
}
