export default {
  NOT_FOUND: (error: any) => ({
    statusCode: 404,
    messageCode: 'error.SN-001',
    message: 'Not found',
    error,
  }),
  ALREADY_EXIST: (error: any) => ({
    statusCode: 400,
    messageCode: 'error.SN-002',
    message: 'Already exist',
    error,
  }),
  FIELD_IS_REQUIRED: (error: any) => ({
    statusCode: 400,
    messageCode: 'error.SN-003',
    message: 'Field is required',
    error,
  }),
  INVALID_OTP: (error: any) => ({
    statusCode: 401,
    messageCode: 'error.SN-001',
    message: 'The OTP is incorrect',
    error,
  }),
}
