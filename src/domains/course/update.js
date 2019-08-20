import courseRepository from '../../models/course.repository'
import { checkUpdate, findOneIfNotExistThrowError } from '../../utils/domain'

const updateUserProfile = async (id, body) => {
  await findOneIfNotExistThrowError(courseRepository, {_id:id})
  const data = await checkUpdate(courseRepository, { _id: id }, body)
  
  return data
}

export default updateUserProfile
