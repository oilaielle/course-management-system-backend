export const BAD_REQUEST = {
  statusCode: 400,
  code: 'BAD_REQUEST',
  message: 'The request has invalid parameters.'
}

export const NOT_FOUND = {
  statusCode: 404,
  code: 'NOT_FOUND',
  message: 'The requested resource could not be found.'
}

export const UNAUTHORIZED = {
  statusCode: 401,
  code: 'UNAUTHORIZED',
  message: 'UNAUTHORIZED'
}

export const INTERNAL_ERROR = {
  statusCode: 500,
  code: 'INTERNAL_ERROR',
  message: 'The server encountered an internal error.'
}

export const UNKNOWN_ERROR = {
  statusCode: 500,
  code: 'UNKNOWN_ERROR',
  message: 'The server encountered an unknown error.'
}
