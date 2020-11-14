// Node Modules Imports
const express = require('express')

const path = require('path')
const bodyParser = require('body-parser')

// Internal Modules Imports
const api = require('./routes/api')


// Setting up express, serving client files, configuring bodyParser
const app = express()
app.use(express.static(path.join(__dirname, 'Book-Library')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Connecting to "api", i.e our routes
app.use('/', api)

// Running the server
const port = 3002

app.listen(port, function () { console.log('Running on ' + port) })