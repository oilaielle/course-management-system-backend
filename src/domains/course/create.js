import courseRepository from '../../models/course.repository'
import { findOneIfAlreadyExistThrowError } from '../../utils/domain'

export default async body => {
  const { name } = body
  
  await findOneIfAlreadyExistThrowError(courseRepository, { name })

  const user = await courseRepository.create(body)

  return user
}
