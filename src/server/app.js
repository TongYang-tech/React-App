import express from 'express'
import cors from 'cors'

const app = express();

app.use(express.json())
app.get("/api/ok", (_, res) => {
  res.status(200).json({
    "data": "OK",
    "timestamp": new Date().toISOString()
  })
});

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

export default app
