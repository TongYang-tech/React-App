const express = require('express')

const healthRouter = express.Router()

healthRouter.use("/", (_, res) => {
  res.status(200).json({
    "data": "OK",
    "timestamp": new Date().toISOString()
  })
})

module.exports = healthRouter
