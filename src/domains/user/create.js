// @flow
import userRepository from '../../models/user.repository'
import { findOneIfAlreadyExistThrowError } from '../../utils/domain'

export default async (body: any) => {
  const { email } = body
  // await findOneIfAlreadyExistThrowError(userRepository, { email })
  const user = await userRepository.create(body)
  return user
}
