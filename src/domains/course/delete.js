import courseRepository from '../../models/course.repository'
import { checkDelete, findOneIfNotExistThrowError } from '../../utils/domain'

const deleteUser = async id => {
  await findOneIfNotExistThrowError(courseRepository, { _id: id })
  const resp = await checkDelete(courseRepository, { _id: id })
  return resp
}

export default deleteUser
