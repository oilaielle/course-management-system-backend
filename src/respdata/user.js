import R from 'ramda'

const filterResp = user => ({
  firstName: user.firstName,
  lastName: user.lastName,
  nickname: user.nickname,
  birthday: user.birthday,
  gender: user.gender,
  email: user.email,
  role: user.role,
})

export const respCreateUser = user => filterResp(user)
export const respViewUser = user => filterResp(user)
export const respUpdateUser = user => filterResp(user)
export const respListUser = user => R.map(data => filterResp(data), user.data)
