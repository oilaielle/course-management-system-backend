import userRespository from '../../models/user.repository'
import { checkUpdate, findOneIfNotExistThrowError } from '../../utils/domain'

const updateUserProfile = async (usernameOrEmailOrPhone: string, body: any) => {
  const query = {
    $or: [
      {
        email: usernameOrEmailOrPhone,
      },
      {
        phone: usernameOrEmailOrPhone,
      },
      {
        username: usernameOrEmailOrPhone,
      },
    ],
    isActive: true,
  }
  const user = await findOneIfNotExistThrowError(userRespository, query)
  await checkUpdate(userRespository, query, { ...body, password: user.password })
  return body
}

export default updateUserProfile
