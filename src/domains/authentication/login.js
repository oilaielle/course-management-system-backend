import 'dotenv/config'
import jwt from 'jsonwebtoken'
import userRepository from '../../models/user.repository'

export default async body => {
  const { email, password } = body

  const privateKey = process.env.PRIVATE_KEY
  const jwtPassword = await jwt.sign(password, privateKey)
  const filter = {
    email: email,
    password: jwtPassword,
  }
  const user = await userRepository.findOne(filter)

  const jwtUser = user !== null && {
    _id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    nickname: user.nickname,
    birthday: user.birthday,
    gender: user.gender,
    email: user.email,
  }
  const token = user !== null ? await jwt.sign(jwtUser, privateKey) : null

  return { token, user: jwtUser }
}
