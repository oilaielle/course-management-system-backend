// @flow
import userRepository from '../../models/user.repository'
import { checkDelete, findOneIfNotExistThrowError } from '../../utils/domain'

const deleteUser = async (username: string) => {
  await findOneIfNotExistThrowError(userRepository, { username })
  const resp = await checkDelete(userRepository, { username })
  return resp
}

export default deleteUser
