import express from 'express'
import cors from 'cors'
import router from './route/index.js'

const app = express();

app.use(express.json())
app.use('/placeholder/api/health', router)

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

export default app
