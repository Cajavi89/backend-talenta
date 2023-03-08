import cors from 'cors'
import express from 'express'
import { router } from './routes'

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:5173'],
  })
)
app.use(router)

export default app
