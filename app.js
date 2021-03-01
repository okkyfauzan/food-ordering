const cors = require('cors')
const express = require('express')
const app = express()
const router = require('./routes')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

module.exports = app