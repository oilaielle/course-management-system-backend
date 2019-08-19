import 'dotenv/config'
import jwt from 'jsonwebtoken'
import userRepository from '../../models/user.repository'
import { respCreateUser } from '../../respdata/user'
import { findOneIfAlreadyExistThrowError } from '../../utils/domain'

export default async body => {
  const { email, password } = body

  const privateKey = process.env.PRIVATE_KEY
  const jwtPassword = await jwt.sign(password, privateKey)

  await findOneIfAlreadyExistThrowError(userRepository, { email })

  const user = await userRepository.create({ ...body, password: jwtPassword })

  return respCreateUser(user)
}
