import 'dotenv/config'

export default {
  env: process.env.NODE_ENV || 'localhost',
  database: {
    name: process.env.DB_NAME,
    pass: process.env.DB_PASS,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  port: process.env.PORT || 3000,
  log: {
    name: process.env.APP_NAME || 'nodejs-koa-backend',
    streams: [
      {
        type: 'stream',
        stream: process.stdout,
        level: 'debug',
      },
    ],
  },
}
