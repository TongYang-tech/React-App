import express from 'express'
import cors from 'cors'
import healthRouter from './route/health.js'

const app = express();

app.use(express.json())
app.use('/placeholder/api/health', healthRouter)

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

export default app
