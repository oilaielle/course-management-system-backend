// @flow
import userRepository from '../../models/user.repository'
import { findOneIfNotExistThrowError } from '../../utils/domain'

export default async (usernameOrEmailOrPhone: string) => {
  const query = {
    isActive: true,
  }

  const user = await findOneIfNotExistThrowError(userRepository, query)
  return user
}
