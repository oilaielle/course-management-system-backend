export default {
  WRONG_PASSWORD: (error: any) => ({
    statusCode: 404,
    messageCode: 'error.SA-001',
    message: 'Password incorrect',
    error,
  }),
  MISSING_HEADER_TOKEN: (error: any) => ({
    statusCode: 403,
    messageCode: 'error.SA-002',
    message: 'MISSING_HEADER_TOKEN',
    error,
  }),
  INVALID_TOKEN: (error: any) => ({
    statusCode: 401,
    messageCode: 'error.SA-003',
    message: 'INVALID_TOKEN',
    error,
  }),
}
