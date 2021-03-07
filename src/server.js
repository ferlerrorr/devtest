const express = require('express')
const bodyParser = require('body-parser')

const app = express()

/* Middleware */
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

/* Routes */
const itemsRoute = require(`./routes/Items`)

app.use('/items', itemsRoute)

const port = 3011

app.listen(port, () => {
    console.log("Listening on port: ", port)
})