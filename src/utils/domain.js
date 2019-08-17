// @flow
import mongoose from 'mongoose'
import R from 'ramda'

import config from '../config'

import ThrowError from '../error/basic'
import ThrowErrorAuth from '../error/auth'

export const findAndUpdateOrCreate = async (repo: any, filter: any, data: any) => {
  let obj = await repo.findOne(filter)
  if (obj) {
    obj = await repo.update(filter, data)
  } else {
    obj = await repo.create(data)
  }
  return obj
}

export const findOrCreate = async (repo: any, filter: any, data: any) => {
  let obj = await repo.findOne(filter)
  if (!obj) {
    obj = await repo.create(data)
  }
  return obj
}
export const findOneIfAlreadyExistThrowError = async (repo: any, filter: any) => {
  const obj = await repo.findOne(filter)
  if (obj) throw ThrowError.ALREADY_EXIST({ model: repo.model.modelName, ...filter })
  return true
}

export const findOneIfNotExistThrowError = async (repo: any, filter: any) => {
  const obj = await repo.findOne(filter)
  if (!obj) throw ThrowError.NOT_FOUND({ model: repo.model.modelName, ...filter })
  return obj
}

export const checkUpdate = async (repo: any, filter: any, data: any) => {
  const obj = await repo.update(filter, data, { new: true })
  if (!obj) throw ThrowError.NOT_FOUND({ model: repo.model.modelName, ...filter })
  return obj
}

export const checkDelete = async (repo: any, filter: any) => {
  const obj = await repo.delete(filter)
  if (!obj) throw ThrowError.NOT_FOUND({ model: repo.model.modelName, ...filter })
  return obj
}

export const findDetailUser = async (repo: any, filter: any) => {
  const options = {
    populate: [
      {
        path: 'role',
        populate: [{ path: 'permissions' }, { path: 'typeId' }],
      },
    ],
  }
  const detail = await repo.find(filter, options)
  if (R.isEmpty(detail)) throw ThrowError.NOT_FOUND({ model: repo.model.modelName, ...filter })

  return detail
}

export const isEmail = (email: string) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const isRoleType = (type: string) => {
  if (type === 'Project' || type === 'Company') return true
  return false
}

export const isRequiredField = (obj: any, validate: any) => {
  let errors = {}
  Object.keys(validate).forEach(key => {
    if (!R.path([key], obj) || R.isEmpty(R.path([key], obj))) {
      errors = {
        ...errors,
        [key]: `field is required`,
      }
    } else if (key === '_id' && !mongoose.Types.ObjectId.isValid(obj[key])) {
      errors = {
        ...errors,
        [key]: `field not valid`,
      }
    } else if (R.path([key, 'type'], validate) === 'email' && !isEmail(obj[key])) {
      errors = {
        ...errors,
        [key]: `invalid email`,
      }
    } else if (R.path([key, 'type'], validate) === 'roleType' && !isRoleType(obj[key])) {
      errors = {
        ...errors,
        [key]: `invalid type`,
      }
    }
  })

  if (!R.isEmpty(errors)) throw ThrowError.FIELD_IS_REQUIRED(errors)
  return true
}

export const isRequiredUser = (obj: any) => {
  const { username, email, phone } = obj

  if (username) return { username }
  if (isEmail(email)) return { email }
  if (phone) return { phone }
  throw ThrowError.FIELD_IS_REQUIRED({
    errors: 'require username or email or phone',
  })
}

export const checkPassword = (password: string, userPassword: string) => {
  if (!passwordHash.verify(password, userPassword))
    throw ThrowErrorAuth.WRONG_PASSWORD({ model: 'User', password })
}

export const findDistinct = async (model: any, key: string) => {
  const resp = await model.find().distinct(key)
  return resp
}

export const driverCheckHasPassword = async (repo: any, phone: string) => {
  const hasPassword = await repo.findOne({ phone, password: { $exists: true } })
  if (hasPassword) {
    throw ThrowError.ALREADY_EXIST({
      errors: 'Sorry, that phone number already registered!',
    })
  }
  return true
}
