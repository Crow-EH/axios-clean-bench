'use strict'

const express = require('express')
const axios = require('axios').default;
const app = express()

const MOCK_URL = 'http://mock:8081/mock'

app.get('/raw', async (_req, res) => {
    try {
        const response = await axios.get(MOCK_URL)
        res.send(response.data)
    } catch(e) {
        res.send(e)
    }
})

app.get('/no-null', async (_req, res) => {
    try {
        const response = await axios.get(
            MOCK_URL,
            {
                // We override Axios' default "transformResponse", that only does JSON.parse on strings
                // https://github.com/axios/axios/blob/b4c5d35d2875191dfa8c3919d4227dce8e2ad23f/lib/defaults.js#L58-L66
                transformResponse: function (data) {
                    if (typeof data === 'string') {
                        try {
                            data = JSON.parse(
                                data,
                                (_key, value) => {
                                    if (value === null) return undefined
                                    return value
                                }
                            );
                        } catch (e) { /* Ignore */ }
                    }
                    return data;
                }
            }
        )
        res.send(response.data)
    } catch(e) {
        res.send(e)
    }
})

app.get('/clean', async (_req, res) => {
    try {
        const response = await axios.get(
            MOCK_URL,
            {
                transformResponse: function (data) {
                    if (typeof data === 'string') {
                        try {
                            data = JSON.parse(
                                data,
                                (_key, value) => {
                                    if (value === null) return undefined
                                    if (value === '') return undefined
                                    return value
                                }
                            );
                        } catch (e) { /* Ignore */ }
                    }
                    return data;
                }
            }
        )
        res.send(response.data)
    } catch(e) {
        res.send(e)
    }
})

app.get('/parano', async (_req, res) => {
    try {
        const response = await axios.get(
            MOCK_URL,
            {
                transformResponse: function (data) {
                    if (typeof data === 'string') {
                        try {
                            data = JSON.parse(
                                data,
                                (_key, value) => {
                                    if (value === null) return undefined
                                    if (value === '') return undefined
                                    if (value.constructor === Object && Object.entries(value).length === 0) return undefined
                                    if (Array.isArray(value) && (value.length === 0 || value.every(item => item === null || item === undefined))) return undefined
                                    return value
                                }
                            );
                        } catch (e) { /* Ignore */ }
                    }
                    return data;
                }
            }
        )
        res.send(response.data)
    } catch(e) {
        res.send(e)
    }
})

app.listen(8080)

module.exports = app
