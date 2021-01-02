import app from './app'
import logger from './utils/logger'
import { APP_PORT } from './utils/secrets'

app.listen(APP_PORT, () => {
    logger.info(`server running on port : ${APP_PORT}`)
    console.log(`server running on port : ${APP_PORT}`)
}).on('error', e => logger.error(e))
