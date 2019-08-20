import courseRepository from '../../models/course.repository'
import { findOneIfNotExistThrowError } from '../../utils/domain'

export default async id => {
  const data = await findOneIfNotExistThrowError(courseRepository, { _id: id })
  return data
}
