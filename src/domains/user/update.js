import userRespository from '../../models/user.repository'
import { checkUpdate, findOneIfNotExistThrowError } from '../../utils/domain'

const updateUserProfile = async (id, body) => {
  await findOneIfNotExistThrowError(userRespository, {_id:id})
  const data = await checkUpdate(userRespository, { _id: id }, body)
  
  return data
}

export default updateUserProfile
