import { NOT_FOUND } from '../constants/error'
import DBError from '../error/mongoose'

const CODE_MAPPING = {
  400: 'badRequest',
  401: 'unauthorized',
  403: 'forbidden',
  404: 'notFound',
}

export default async (ctx, next) => {
  try {
    await next()
    if (!ctx.body && (!ctx.status || ctx.status === 404)) ctx.res.notFound(NOT_FOUND)
  } catch (err) {
    // translate[ctx.headers.language][err.messageCode]
    // {
    //   TH: {
    //     "sa.10s": "field ${username} is required"
    //   },
    //   EN: {
    //   }
    // }
    // ####################################################################################
    // after translate => Override or Add err.message HERE
    // ####################################################################################
    let error = err
    if (err.kind === 'ObjectId') {
      error = DBError.MONGOOSE_OBJECT_ID_INVALID(err)
    }
    const respFunc = ctx.res[CODE_MAPPING[error.statusCode] || 'internalServerError']
    respFunc.call(null, error)
    ctx.app.emit('error', error, ctx)
  }
}
