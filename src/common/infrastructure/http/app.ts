import cors from 'cors'
import express from 'express'
import { routes } from './routes'
import { errorHandler } from './middlewares/errorHandler'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const app = express()

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'welcome to C2C Market API!',
      version: '1.0.0',
    },
  },
  apis: [],
}

const swaggerSpec = swaggerJSDoc(options)

app.use(cors())
app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
app.use(routes)
app.use(errorHandler)

export { app }
