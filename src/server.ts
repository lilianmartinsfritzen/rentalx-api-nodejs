import express from 'express'
import 'dotenv/config'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger.json'

import './database'

import './shared/container'

import { router } from './routes'
import swaggerFile from './swagger.json'

const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(router)

app.listen(3333, () => console.log('Server is running!'))
