import userRepository from '../../models/user.repository'
import { checkDelete, findOneIfNotExistThrowError } from '../../utils/domain'

const deleteUser = async id => {
  await findOneIfNotExistThrowError(userRepository, { _id: id })
  const resp = await checkDelete(userRepository, { _id: id })
  return resp
}

export default deleteUser
