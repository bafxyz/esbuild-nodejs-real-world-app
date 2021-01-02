import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: '.env' })

export const ENVIRONMENT = process.env.APP_ENV || 'dev'
export const IS_PRODUCTION = ENVIRONMENT === 'production'
export const APP_PORT = parseInt(process.env.APP_PORT) || 3000
export const LOG_DIRECTORY = process.env.LOG_DIRECTORY || path.resolve('logs')
export const JWT_SECRET = process.env.JWT_SECRET || 'secret'
export const SESSION_SECRET = process.env.SESSION_SECRET || 'secret'
export const DB = {
    USER: process.env.DB_USER || 'test',
    PASSWORD: process.env.DB_USER_PWD || 'test1234',
    HOST: process.env.DB_HOST || 'localhost',
    NAME: process.env.DB_NAME || 'testdb',
    PORT: parseInt(process.env.DB_PORT) || 27017
}
