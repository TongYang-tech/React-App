'use strict'
const express = require('express')
const cors = require('cors')
const compression = require('compression')
const path = require('path')
const healthRouter = require('./route/health.js')

const baseUrl = '/placeholder'
const buildDir = path.join(__dirname, '../../dist/client')
const assetsDir = path.join(__dirname, '../../dist/client/assets')
const app = express()

app.use(compression())
app.use(express.json())

app.use(`${baseUrl}/api/health`, healthRouter)

app.use(`${baseUrl}/assets`, express.static(assetsDir))
app.get('/{*splat}', (req, res) => {
  res.sendFile('index.html', { root: buildDir })
})

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

module.exports = app
