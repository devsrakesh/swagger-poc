const express = require('express')
const cors = require('cors')
const app = express()
const webRouter =require('./routes/webRouter')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger.json')

const PORT = 3030
app.use(cors())
app.use('/',webRouter)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.listen(PORT,()=>{
console.log("server started")
})

