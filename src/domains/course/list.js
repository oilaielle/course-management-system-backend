import courseRepository from '../../models/course.repository'
import type { Paginate } from '../../types/paginate'

export default async (filter: any, options: Paginate) => {
  console.log('filter--------\n', filter)
  console.log('options--------\n', options)

  const resp = await courseRepository.find(filter)
  return resp
}
