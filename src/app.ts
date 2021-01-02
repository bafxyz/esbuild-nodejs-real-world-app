import bodyParser from 'body-parser'
import compression from 'compression'
import express, { Application } from 'express'
import session from 'express-session'
import helmet from 'helmet'
import './database' // initialize database
import { MainRouter } from './routes'
import { loadErrorHandlers } from './utils/error-handling'
import './utils/passport'
import { SESSION_SECRET } from './utils/secrets'

const app: Application = express()

app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(
    session({
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 60000
        },
        resave: false,
        saveUninitialized: false
    })
)
app.use('/api', MainRouter)

loadErrorHandlers(app)

export default app
