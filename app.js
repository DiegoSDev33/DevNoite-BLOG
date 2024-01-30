const express = require('express')

const app = express()

const port = 3000

const feedRoutes = require('./routes/feedRoutes')

//jsonparse do express - middware para captar os json do cliente
app.use(express.json())

//middleware para configurar o CORS
app.use((req, res, next) => {
    res.setHeader('Acess-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT< PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization')
    next()
})





//vai pegar todas as rotas criadas no feedRoutes
app.use('/feed', feedRoutes)






app.listen(port, () => {
    console.log(`servidor no ar na porta: ${port}`)
})

