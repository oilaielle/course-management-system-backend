import courseRepository from '../../models/course.repository'
import type { Paginate } from '../../types/paginate'

export default async (filter: any, options: Paginate) => {
  const resp = await courseRepository.find(filter, options)
  return resp
}
