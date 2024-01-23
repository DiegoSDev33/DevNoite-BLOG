const express = require('express')

const app = express()

const port = 3000

const feedRoutes = require('./routes/feedRoutes')

app.use('/feed', feedRoutes)






app.listen(port, () => {
    console.log(`servidor no ar na porta: ${port}`)
})