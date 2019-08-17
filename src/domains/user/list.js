// @flow
import UserRepository from '../../models/user.repository'
import type { Paginate } from '../../types/paginate'

export default async (filter: any, options: Paginate) => {
  const resp = await UserRepository.find(filter, options)
  return resp
}
