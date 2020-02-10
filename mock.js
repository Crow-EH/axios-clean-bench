'use strict'

const MOCK = require('./mock.json')
const express = require('express')
const app = express()

app.get('/mock', (_req, res) => {
    res.send(MOCK)
})

app.listen(8081)

module.exports = app
